import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        background: #f2f2f2;
    }
`;

export default GlobalStyle;