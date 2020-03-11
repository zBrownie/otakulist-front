import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 60px 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  main {
    margin-left: 30px;
  }

  aside {
    width: 320px;
    background: #fff;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    padding: 30px 20px;
  }

  @media (max-width: 1050px) {
    .app {
      flex-direction: column;
    }
    .app main {
      margin-left: 0;
      margin-top: 30px;
    }
    .app aside {
      width: 100%;
    }
  }
`;
