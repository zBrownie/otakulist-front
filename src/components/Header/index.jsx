import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { handleGetToken, handleGetUser } from "../../redux/Actions";

export default function Header() {
  const user = useSelector(state => state.userdata);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(handleGetToken(""));
    dispatch(handleGetUser({}));
  }
  return (
    <Container>
      <Link to="/">Otaku List</Link>
      <div>
        {Object.entries(user).length === 0 ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <Link to="/profile">Perfil</Link>
            <Link to="/cadastro">Cadastrar</Link>
            <Link to="/" onClick={handleLogout}>
              Sair
            </Link>
          </>
        )}
      </div>
    </Container>
  );
}
