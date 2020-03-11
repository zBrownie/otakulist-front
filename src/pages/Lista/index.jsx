import React, { useState, useEffect } from "react";
import api from "../../service/api";
import { Container } from "./styles";
import AnimesShow from "../../components/AnimesShow";

export default function Lista() {
  const [animes, setanimes] = useState([]);
  useEffect(() => {
    async function handleAllAnimes() {
      await api.get("/animes").then(response => {
        setanimes(response.data);
      });
    }
    handleAllAnimes()
  }, []);

  return (
    <Container>
      <AnimesShow data={animes} title={""} />
    </Container>
  );
}
