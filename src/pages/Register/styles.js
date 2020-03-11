import styled from 'styled-components';

export const Container = styled.div`
  form {
    max-width: 660px;
    width: 100%;
    margin: 80px auto;

    display: flex;
    flex-direction: column;

    align-items:center;
    justify-content:center;

    border-radius:5px;
    padding:12px;
    box-shadow: 10px 10px 30px rgba(0,0,0,0.1);

    label{
        font-size:16px;
        color: #23231f;
        margin: 6px 0;
    }

    input{
        margin: 10px;
    }

    button{
        margin-top:20px;
        background:#23231f;
        color: #fff;
        border:0;
        font-weight:bold;
        font-size:18px;
        padding:8px 16px;
        border-radius:3px;
    }
  }
`;
