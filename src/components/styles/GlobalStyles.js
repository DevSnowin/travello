import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-family: "IBM Plex Sans", sans-serif;
        color: #121212;
        scroll-behavior: smooth;
        overflow-x: hidden;
    }
    a{
        color: #fff;
    }
`;
