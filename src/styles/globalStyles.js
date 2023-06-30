import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    size: 14px;
    color: ${({ theme }) => theme.color.white};
    height: 100vh;
    background-color: ${({ theme }) => theme.color.background}
  }

  h1,h2 {
    margin: 0
  }



*::-webkit-scrollbar {
  width: 3px;
}

*::-webkit-scrollbar-track {
  background: #41c78f;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
opacity: 0.8;
}



  @media only screen and (min-width: 1024px) {
   #root {
    display: flex;
    justify-content: center;
   } 
  }
`;

export default GlobalStyle;
