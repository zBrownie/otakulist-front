import React from "react";
import api from "../../service/api";
import { Container } from "./styles";

export default function Register() {
  async function handleSubmit(data) {
    await api
      .post("/users")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("ERRO CADSATRO", error);
      });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" />
        <Input name="password" type="password" />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
}
