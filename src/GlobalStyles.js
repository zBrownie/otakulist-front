import { createGlobalStyle } from 'styled-components';

import 'react-circular-progressbar/dist/styles.css'

const GlobalStyles = createGlobalStyle `
  *{
      
      padding:0;
      margin:0;
      outline:0;
      box-sizing:border-box;
  }


  body,input,button{
    font-family:"Roboto",Arial, Helvetica, sans-serif;
    
  }

  body{
    font-size:14px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background:#fafafa;
  }

  html,body,#root{
    height: 100%;
  }
`;

export default GlobalStyles