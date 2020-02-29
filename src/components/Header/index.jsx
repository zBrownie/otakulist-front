import React from 'react';
import { Link } from 'react-router-dom'
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">Otaku List</Link>
      <Link to="/cadastro">Cadastrar</Link>
    </Container>
  );
}
