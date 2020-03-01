import styled from 'styled-components';

export const Container = styled.div `
  
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

  header{
      width:100%;
      display:flex;
      flex-direction:row;
      justify-content:space-evenly;
        border-bottom: 1px solid #00000044;
        padding:10px;
      h1{
        
      }

      button{
          background:transparent;
          border:0;
          color:#23231f;
          font-size:16px;
          font-weight:bold;
          cursor:pointer;
      }
  }

  main{
      display:grid;
      grid-template-columns: 300px 250px;
      

      .anime-info{
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
      }

      .anime-desc{

          margin: 20px auto;
        span{
          font-size:1rem;
      }
      } 
      
      .anime-icons{
        margin-top: 18px;
      }
      .anime-icons span{
          font-size:20px;
          
          padding-left: 10px;
      }

      @media (max-width:500px){
         grid-template-columns: 1fr; 
      }
  }

  footer{
    margin: 32px auto;

      a{
          text-decoration:none;
          background: #23231f;
          color: #fff;
          border:none;
          font-size:18px;
          font-weight:bold;
          padding: 8px 16px;
          margin-left: 10px;
      }
  }
`;

export const PosterAnime = styled.div `
    margin: 12px auto;
    width:200px;
    height:300px;
    background-image: url(${props => props.src});
    background-repeat:no-repeat;
    background-size:cover;
    border-radius:3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    display:flex;
    flex-direction:column;
    justify-content:center;

    transition:1s;

    :hover{
      transform:scale(1.09);
    }

    span{
        text-align:center;
        background:#cccccc44;
        color:#000000dd;
        padding: 16px 0;
        font-weight:700;
        
        
            text-shadow: 
        -1px -1px 0px #fff,
         0px -1px 0px #fff,
         1px -1px 0px #fff,
        -1px  0px 0px #fff,
         1px  0px 0px #fff,
        -1px  1px 0px #fff,
         0px  1px 0px #fff,
         1px  1px 0px #fff;
        
    }



`