import SVG from 'react-inlinesvg';
import UploadLogo from '../../assets/upload.svg';

import * as S from './styles';
import { useState, useEffect } from 'react';
import Loading from '../Loading';
import { postTranscription, postProcess } from '../../api';

const Upload = ({ setStep, setData }) => {
  const [isLoading, setIsLoading] = useState(null);

  const getFormDataFromBase64 = (base64) => {
    const formData = new FormData();

    formData.append('filename', base64);

    return formData;
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;

    if (files.length) {
      const audioFile = files[0];
      setIsLoading(true);
      console.log(
        'Arquivo de áudio:',
        getFormDataFromBase64(audioFile).get('filename')
      );
      postTranscription(getFormDataFromBase64(audioFile))
        .then((response) => {
          return response.data;
        })
        .then(({ data }) => {
          postProcess(data)
            .then((response) => {
              return response.data;
            })
            .then(({ data }) => {
              setData(data);
              setStep('BRIEFING');
            });
        });
    }
  };

  const handlePreventDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleFileChange = (event) => {
    const audioFile = event.target.files[0];
    console.log('Arquivo selecionado:', audioFile);

    setIsLoading(true);
    console.log(
      'Arquivo de áudio:',
      getFormDataFromBase64(audioFile).get('filename')
    );
    postTranscription(getFormDataFromBase64(audioFile))
      .then((response) => {
        return response.data;
      })
      .then(({ data }) => {
        postProcess(data)
          .then((response) => {
            return response.data;
          })
          .then(({ data }) => {
            setData(data);
            setStep('BRIEFING');
          });
      });
  };

  useEffect(() => {
    if (isLoading === false) {
      setStep('BRIEFING');
    }
  }, [isLoading, setStep]);

  const uploadForm = (
    <S.Form
      method="post"
      encType="multipart/form-data"
      draggable
      onDragLeave={handlePreventDrag}
      onDragOver={handlePreventDrag}
      onDrop={handleDrop}
    >
      <SVG src={UploadLogo} />
      <S.Text>
        Solte um arquivo de áudio aqui ou{' '}
        <S.Label htmlFor="fileInput">Selecione um arquivo</S.Label>
      </S.Text>
      <S.Input
        id="fileInput"
        type="file"
        accept=".mp3,.mp4,.mpeg,.mpga,.m4a,.wav,.webm,.ogg"
        onChange={handleFileChange}
      />
    </S.Form>
  );

  const renderUpload = isLoading ? (
    <Loading setIsLoading={setIsLoading} />
  ) : (
    uploadForm
  );

  return renderUpload;
};

export default Upload;
