import React, { useState, useEffect } from 'react';
import api from '../../service/api'
import { Container } from './styles';
import AnimesShow from '../../components/AnimesShow'

export default function Home() {

  const [animesDia, setanimesDia] = useState([]);
  const [animesSeason, setanimesSeason] = useState([]);

  useEffect(() => {

    function handleData() {
      api.get('/search/day').then(
        response => {
          setanimesDia(response.data)
        }
      ).catch(erro => {
        console.log("ERRO PEGAR ANIMES DO DIA ", erro)
      })

      api.get('/search/season').then(
        response => {
          setanimesSeason(response.data)
        }
      ).catch(erro => {
        console.log("ERRO PEGAR ANIMES DO DIA ", erro)
      })
    }
    handleData()
  }, []);

  return (
    <Container>
      <AnimesShow data={animesDia} title={"Passando Hoje"} />
      <AnimesShow data={animesSeason} title={"Season atual"} show={true} />
    </Container>
  );
}
