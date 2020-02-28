import styled from 'styled-components';

export const Container = styled.div `
  
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    max-width:400px;
    margin: 0 auto;


  form{
      background:#fff;
      display:flex;
      flex-direction:column;
      max-width:500px;
      margin: 20px auto;
      padding: 32px;
      border-radius: 4px;
      width:100%;
      border: 1px solid #00000033;
    h1{
        border-bottom: 1px solid #cccccc88;
        margin-bottom: 10px;
        padding: 10px;
    }

      input,textarea,button, .selecte{
          margin: 10px 0;
      }

      input,textarea{
          padding: 8px 16px;
          border: 1px solid #ccccccee;
          border-radius: 3px;
      }

      button{
          height: 36px;
          border:none;
          background:#23231f;
          color:#fff;
      }

    }
`;