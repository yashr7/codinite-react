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
        background: rgb(0,13,82);
background: linear-gradient(90deg, rgba(0,13,82,1) 0%, rgba(252,70,108,1) 100%); 
    }
    h2{
        font-size: 2rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        color: #EFF6E0;
    }
    h3{
        font-size: 0.9rem;
        color: #AEC3B0;
        padding: 1rem 0.2rem;
    }
    p{
        font-size: 0.7rem;
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
