import { useState, useEffect } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import Loading from '../Loading';
import { postTranscription, postProcess } from '../../api';

import * as S from './styles';

const Recorder = ({ setStep, setData }) => {
  const [audioBlob, setAudioBlob] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  const handleRecordingStart = () => {
    setIsRecording(true);
  };

  const handleRecordingStop = (blob) => {
    setAudioBlob(blob);
    setIsRecording(false);
  };

  const convertLinkToFormData = async (link) => {
    try {
      const response = await fetch(link);
      const audioBlob = await response.blob();

      console.log(audioBlob);

      const formData = new FormData();
      formData.append('filename', audioBlob, 'audio.mp3');

      return formData;
    } catch (error) {
      console.error('Ocorreu um erro:', error);
    }
  };

  const handleUpload = async () => {
    if (audioBlob) {
      const formData = await convertLinkToFormData(audioBlob);

      console.log('Arquivo de áudio:', formData.get('filename'));
      setIsLoading(true);
      postTranscription(formData)
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

  useEffect(() => {
    if (isLoading === false) {
      setStep('BRIEFING');
    }
  }, [isLoading, setStep]);

  const recorderElement = (
    <div>
      <ReactMediaRecorder
        mediaType="audio"
        onStop={handleRecordingStop}
        onStart={handleRecordingStart}
        render={({ startRecording, stopRecording }) => (
          <S.WrapperRecordButtons>
            <S.Button onClick={startRecording} disable={isRecording}>
              {isRecording ? 'Gravando...' : 'Iniciar Gravação'}
            </S.Button>
            <S.Button onClick={stopRecording} disable={!isRecording}>
              Parar Gravação
            </S.Button>
          </S.WrapperRecordButtons>
        )}
      />
      <S.WrapperSend>
        {audioBlob && <audio src={audioBlob} controls />}
        <S.Button onClick={handleUpload}>Enviar</S.Button>
      </S.WrapperSend>
    </div>
  );

  const renderRecorder = isLoading ? (
    <Loading setIsLoading={setIsLoading} />
  ) : (
    recorderElement
  );

  return renderRecorder;
};

export default Recorder;
