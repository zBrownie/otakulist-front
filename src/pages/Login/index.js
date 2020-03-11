import React from "react";

import { Container } from "./styles";
import { Form } from "@unform/web";
import Input from "../../components/Form/input";

import api from "../../service/api";

export default function Login() {
  const handleSubmit = async data => {
    api
      .get("/users")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("ERRO LOGIN", error);
      });
  };

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
