import React, { useState, useEffect } from "react";
import api from "../../service/api";
import { Container } from "./styles";
import AnimesShow from "../../components/AnimesShow";
import { useDispatch, useSelector } from "react-redux";
import { handleAddAnimes, handleGetSeason } from "../../redux/Actions";

export default function Home() {
  const [animesDia, setanimesDia] = useState([]);

  const dispatch = useDispatch();
  const season = useSelector(state => state.season);

  useEffect(() => {
    async function handleData() {
      await api
        .get("/search/day")
        .then(response => {
          setanimesDia(response.data);
        })
        .catch(erro => {
          console.log("ERRO PEGAR ANIMES DO DIA ", erro);
        });

        await api
        .get("/search/season")
        .then(response => {
          dispatch(handleGetSeason(response.data));
        })
        .catch(erro => {
          console.log("ERRO PEGAR ANIMES DO DIA ", erro);
        });

        await api.get("/animes").then(response => {
        dispatch(handleAddAnimes(response.data));
      });
    }
    handleData();
  }, [dispatch]);

  return (
    <Container>
      <AnimesShow data={animesDia} title={"Passando Hoje"} />
      <AnimesShow data={season} title={"Season atual"} show={true} />
    </Container>
  );
}
