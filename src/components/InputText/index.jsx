import { useState, useEffect } from 'react';
import * as S from './styles';
import Loading from '../Loading';
import { postProcess } from '../../api';

const InputText = ({ setStep, setData }) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(null);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = () => {
    console.log('Texto:', text);
    setIsLoading(true);
    postProcess(text)
      .then((response) => {
        return response.data;
      })
      .then(({ data }) => {
        setData(data);
        setStep('BRIEFING');
      });
  };

  const inputTextElement = (
    <S.Container>
      <S.InputText
        placeholder="Escreva aqui..."
        value={text}
        onChange={handleInputChange}
      />
      <S.Button onClick={onSubmit}>Enviar</S.Button>
    </S.Container>
  );

  useEffect(() => {
    if (isLoading === false) {
      setStep('BRIEFING');
    }
  }, [isLoading, setStep]);

  const renderInputText = isLoading ? (
    <Loading setIsLoading={setIsLoading} />
  ) : (
    inputTextElement
  );

  return renderInputText;
};

export default InputText;
