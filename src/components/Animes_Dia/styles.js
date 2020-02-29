import styled from 'styled-components';

export const Container = styled.div `
 max-width:1200px;
 min-width:450px;
 margin:65px auto;
 display:flex;
 flex-direction:column;
 justify-items:center;
 align-items:center;

 ul{
    display:grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap:20px;
      align-items:center;

 }

 
 li{
      list-style:none;
      
  }

  @media (max-width:750px){
    ul{
      grid-template-columns: 1fr 1fr;
      gap:20px;
  }
  }

  @media (max-width:450px){
    ul{
      grid-template-columns: 1fr;
      gap:20px;
  }
}
`;

export const PosterAnime = styled.div `
    margin: 12px;
    width:200px;
    height:300px;
    background-image: url(${props => props.src});
    background-repeat:no-repeat;
    background-size:cover;
    border-radius:2px;
`