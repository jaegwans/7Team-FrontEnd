import { createGlobalStyle } from "styled-components";
const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;  
   box-sizing:border-box;
 }
 html,body{
    background-color: white;
    display: flex;
    justify-content: center;  
    flex-direction: center;
    width : 100vw;
    height : 100vh;
    
    
 }

 @font-face {
    font-family: 'HSBombaram';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/HSBombaram.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
     font-family: 'S-CoreDream-3Light';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
     font-weight: normal;
     font-style: normal;
}
`;

export default Global;
