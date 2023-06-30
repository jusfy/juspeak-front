import styled from 'styled-components';

export const WrapperRecordButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const WrapperSend = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 205px;
  height: 50px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.secondary};
  margin: 10px 0;
  padding: 10px;
  border-radius: 6px;
  border: none;
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  ${({ disable }) =>
    disable
      ? `
    opacity: 0.2;
    pointer-events: none;
  `
      : null}
`;
