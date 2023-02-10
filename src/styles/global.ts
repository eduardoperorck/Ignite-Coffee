import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background-image: url('../assets/background.png');
        background-color: ${(props) => props.theme['background']};
        color: ${(props) => props.theme['black-600']};
        -webkit-font-smoothing: antialiased;
        margin: 2rem 10rem;
    }
    
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    a {
        text-decoration: none;
    }
`