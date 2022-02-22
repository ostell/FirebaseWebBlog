import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0%;
        margin: 0%;
        font-family: Arial, Helvetica, sans-serif;
    }

    nav {
        margin: 0;
        width: 100%;
        height: 80px;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        text-decoration: none;
    }

    a {
        color: white;
        text-decoration: none;
        margin: 10px;
        font-size: 25px;
    }

    input,
    textarea {
        margin-top: 5px;
    }
`

export default GlobalStyle