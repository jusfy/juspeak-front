import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px - 10px);
  justify-content: space-between;
  padding: 50px 0 20px 0;
  align-items: center;
`;

export const Footer = styled.p`
  max-width: 547px;
  text-align: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.primary};
  height: 484px;
  width: 861px;
  align-items: center;
  border-radius: ${({ theme }) => theme.border.radius};
  margin-top: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
