import React, { useEffect, useState } from 'react';
import api from '../../service/api'

import { Container, PosterAnime } from './styles';

export default function Animes_Dia() {

    const [animesDia, setanimesDia] = useState([]);

    useEffect(() => {

        function handleData() {
            api.get('/search/day').then(
                response => {
                    setanimesDia(response.data)
                }
            ).catch(erro => {
                console.log("ERRO PEGAR ANIMES DO DIA ", erro)
            })
        }
        handleData()
    }, []);

    return (
        <Container>
            <h1>Passando Hoje</h1>
            <ul>
                {
                    animesDia.map(anime => <li key={anime._id}>
                        <PosterAnime src={anime.img_url} />
                    </li>)
                }
            </ul>
        </Container>
    );
}
