import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Text = styled.p`
  max-width: 335px;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.color.primary};
  min-height: 368px;
  min-width: 611px;
  border-radius: ${({ theme }) => theme.border.radius};
`;
