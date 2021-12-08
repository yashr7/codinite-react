import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
        color: #EFF6E0;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
    background: white;
  }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        background-color: #0b394b;
    }
    h2{
        font-size: 3rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        color: #EFF6E0;
       
    }
    h3{
        font-size: 1.2rem;
        color: #AEC3B0;
        padding: 1.2rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #598392;
    }
    a{
        text-decoration: none;
        color: #EFF6E0;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
    font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyles;
