import { useState } from 'react';
import * as S from './styles';

const Briefing = ({ data }) => {
  const [tabSelected, setTabSelected] = useState('summary');

  data.push({
    step: 'docs',
    value: (
      <>
        <h3 style={{ marginLeft: 20 }}>
          Utilize nossos serviçoes da Jusfy para gerar seus documentos:
        </h3>
        <S.CustomLink
          target="_blank"
          href="https://homologa.jusfy.com.br/jurisprudencia"
        >
          Jurisprudências
        </S.CustomLink>
        <S.CustomLink
          target="_blank"
          href="https://homologa.jusfy.com.br/peticoes"
        >
          Petições
        </S.CustomLink>
        <S.CustomLink
          target="_blank"
          href="https://homologa.jusfy.com.br/jusfinder"
        >
          Consultas
        </S.CustomLink>
      </>
    ),
  });

  const filterByKey = (key) => {
    const filteredData = data.filter((obj) => obj.step === key);

    if (filteredData[0].step === 'nextSteps') {
      return filteredData[0].value
        .split('.') // quebra as linhas em um array
        .filter((frase) => frase) // remove posições vazias do array
        .map((frase) => frase.replace('-', '')) // remove o hyphen que existe no começo das frases
        .map((frase) => <p key={frase}>{frase.trim() + '.'}</p>); // adiciona o ponto final nas frases
    }
    return filteredData[0].value;
  };

  console.log(data, 'teste');
  return (
    <S.Container>
      <S.Header>
        <S.FirstTab onClick={() => setTabSelected('summary')}>
          Resumo
        </S.FirstTab>
        <S.Tab onClick={() => setTabSelected('nextSteps')}>
          Próximos passo
        </S.Tab>
        <S.Tab onClick={() => setTabSelected('transcription')}>
          Transcrição
        </S.Tab>
        <S.LastTab onClick={() => setTabSelected('docs')}>Documentos</S.LastTab>
      </S.Header>
      <S.Wrapper>
        <p>{filterByKey(tabSelected)}</p>
      </S.Wrapper>
    </S.Container>
  );
};

export default Briefing;
