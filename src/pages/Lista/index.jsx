import React from "react";
import { Container } from "./styles";
import AnimesShow from "../../components/AnimesShow";
import { useSelector } from "react-redux";

export default function Lista() {
  const listAnimes = useSelector(state => state.animes);
  return (
    <Container>
      <AnimesShow data={listAnimes} title={""} />
    </Container>
  );
}
