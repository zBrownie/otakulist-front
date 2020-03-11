import React, { useEffect } from "react";
import { Container } from "./styles";
import AnimesShow from "../../components/AnimesShow";
import { useSelector } from "react-redux";

export default function Lista() {
  const animes = useSelector(state => state.animes);
  const user = useSelector(state => state.userdata);

  return (
    <Container>
      <AnimesShow data={animes} title={""} admin={user.admin} lista/>
    </Container>
  );
}
