import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InputText = styled.textarea`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.color.secondary};
  border-radius: 21px;
  width: 435px;
  max-height: 220px;
  padding: 20px;
  outline: none;
  height: 293px;
  color: ${({ theme }) => theme.color.white};
  resize: none;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.white};

  padding: 10px;
  border-radius: 21px;
  border: none;
  color: ${({ theme }) => theme.color.secondary};
  font-weight: 700;
`;
