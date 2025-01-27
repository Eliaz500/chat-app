import { createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle `
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
    }

    body{
        width: 100vw;
        height: 100vw;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`;

export default GlobalStyle;