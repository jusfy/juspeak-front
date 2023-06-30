import SVG from 'react-inlinesvg';
import Logo from '../../assets/logo.svg';

import * as S from './styles';
import Upload from '../Upload';
import { useState } from 'react';
import Briefing from '../Briefing';
import OptionButton from '../OptionButton';
import Recorder from '../Recorder';
import InputText from '../InputText';

const BriefingGenerator = () => {
  const [step, setStep] = useState('UPLOAD');
  const [data, setData] = useState(null);

  const STEPS = new Map([
    ['UPLOAD', <Upload key={'upload'} setStep={setStep} setData={setData} />],
    ['RECORD', <Recorder key={'record'} setStep={setStep} setData={setData} />],
    ['TEXT', <InputText key={'text'} setStep={setStep} setData={setData} />],
    ['BRIEFING', <Briefing key={'briefing'} data={data} />],
  ]);

  const INPUT_OPTIONS = ['UPLOAD', 'TEXT', 'RECORD'];

  const buttonsToRender = INPUT_OPTIONS.filter(
    (inputOption) => inputOption !== step
  );

  return (
    <S.Container>
      <SVG src={Logo} />
      <S.ContentWrapper>{STEPS.get(step)}</S.ContentWrapper>
      <p>Ou escolha uma dessas outras opções</p>
      <S.ButtonWrapper>
        {buttonsToRender.map((inputOption) => (
          <OptionButton
            type={inputOption}
            key={inputOption}
            onClick={() => setStep(inputOption)}
          />
        ))}
      </S.ButtonWrapper>
      <S.Footer>
        Nossas recomendações são diretrizes gerais e não substituem
        aconselhamento jurídico personalizado.
      </S.Footer>
    </S.Container>
  );
};

export default BriefingGenerator;
