import styled from 'styled-components';

export const Container = styled.ul `
  margin:26px 0;

  li{
      display:flex;
      justify-content:space-between;
      align-items:center;
      color:#444;

      & + li{
          margin-top: 15px;
      }
  }
  .progressbar{
      width: 50px;
  }
`;

export const FileInfo = styled.div `
  display:flex;
  align-items:center;

  div{
display:flex;
flex-direction:column;

span{
    font-size:12px;
    color:#999;
    margin-top:5px;

}

button{
    border:0;
    background:transparent;
    color:#e57878;
    margin-left:5px;
    cursor:pointer;
}
  }

`;


export const Preview = styled.div `
  width: 50px;
  height:50px;
  border-radius:5px;
  background-image: url(${props => props.src});
  background-repeat:no-repeat;
  background-size:cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;