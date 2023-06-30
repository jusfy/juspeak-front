import * as S from './styles';

const OptionButton = ({ type, onClick }) => {
  const BUTTON_NAMES = new Map([
    ['UPLOAD', 'ENVIE UM ÁUDIO'],
    ['TEXT', 'ESCREVA'],
    ['RECORD', 'GRAVE UM ÁUDIO'],
  ]);
  return <S.Button onClick={onClick}>{BUTTON_NAMES.get(type)}</S.Button>;
};

export default OptionButton;
