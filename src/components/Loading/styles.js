import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Bar = styled.div`
  height: 12px;
  width: 100%;
  max-width: calc(442px - 20px);
  background: ${({ theme }) => theme.color.background};
  border-radius: 6px;
`;

export const Fill = styled.div`
  width: ${({ percentage }) => `${percentage}%`};
  height: 100%;
  background: ${({ theme }) => theme.color.white};
  border-radius: 6px;
`;
