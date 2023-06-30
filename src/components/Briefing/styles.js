import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  max-height: 343px;
  overflow: scroll;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const Header = styled.div`
  border-radius: 21px;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const Tab = styled.div`
  height: 85px;
  display: flex;
  background: ${({ theme }) => theme.color.secondary};
  width: 100%;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;

export const FirstTab = styled.div`
  height: 85px;
  display: flex;
  background: ${({ theme }) => theme.color.secondary};
  width: 100%;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 21px;
`;

export const CustomLink = styled.a`
  text-decoration: none;
  color: #40c78f !important;
  font-weight: bold;
  cursor: pointer;
  display: block;
  width: fit-content;
  :hover {
    text-decoration: underline;
  }
`;

export const LastTab = styled.div`
  height: 85px;
  display: flex;
  background: ${({ theme }) => theme.color.secondary};
  width: 100%;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  border-top-right-radius: 21px;
`;
