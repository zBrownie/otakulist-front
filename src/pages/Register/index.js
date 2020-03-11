import React, { useEffect } from "react";
import api from "../../service/api";
import { Container } from "./styles";

import { Form } from "@unform/web";
import Input from "../../components/Form/input";
import { useDispatch, useSelector } from "react-redux";
import { handleGetUser, handleGetToken } from "../../redux/Actions";
import { useHistory } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const history = useHistory();
  
  async function handleSubmit(data) {
    await api
      .post("/users", data)
      .then(response => {
        dispatch(handleGetUser(response.data.user));
        dispatch(handleGetToken(response.data.token));
      })
      .catch(error => {
        console.log("ERRO CADSATRO", error);
      });
  }


  useEffect(() => {
    function handleUserOnline() {
      
      if (token) {
        history.push("/profile");
      }
    }
    handleUserOnline()
  
    
  }, [token,history]);
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <Input name="name" type="text" />
        <label htmlFor="email">Email</label>
        <Input name="email" type="email" />
        <label htmlFor="password">Senha</label>
        <Input name="password" type="password" />
        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}
