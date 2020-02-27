import styled from 'styled-components';

export const Container = styled.div `
  

  form{
      display:flex;
      flex-direction:column;
      max-width:500px;
      margin: 20px auto;

      input,textarea,button, .selecte{
          margin: 10px 0;
      }

      input,textarea{
          padding: 8px 16px;
          border: 1px solid #ccccccee;
      }

      button{
          height: 36px;
          border:none;
          background:#23231f;
          color:#fff;
      }
  }
`;