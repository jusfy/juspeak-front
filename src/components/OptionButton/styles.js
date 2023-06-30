import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 45px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.secondary};
  padding: 10px;
  border-radius: 6px;
  border: none;
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
`;
