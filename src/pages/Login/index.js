import React from "react";

import { Container } from "./styles";
import { Form } from "@unform/web";
import Input from "../../components/Form/input";
import { handleGetUser, handleGetToken } from "../../redux/Actions";
import api from "../../service/api";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {

  const dispatch = useDispatch()

  const handleSubmit = async data => {
    await api
      .post("/auth", data)
      .then(response => {
        dispatch(handleGetUser(response.data.user))
        dispatch(handleGetToken(response.data.token))
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
