import React, { useEffect, useState } from 'react';
import api from '../../service/api'
import { Container } from './styles';


export default function Lista() {
    const [listAnimes, setlistAnimes] = useState([]);
    useEffect(() => {

        function getAnimes() {
            api.get('/animes').then(
                response => {
                    // console.log(response)
                    setlistAnimes(response.data)
                }
            )


        }
        getAnimes()
    }, []);
    return (
        <Container>
            <ul>
                {
                    listAnimes.map(anime => <li key={anime._id}>
                        <img src={anime.img_url} alt={anime.title} />
                        <h2>{anime.title}</h2>
                    </li>)
                }
            </ul>
        </Container>
    );
}
