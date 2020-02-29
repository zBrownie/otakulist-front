import React, { useEffect, useState } from 'react';
import api from '../../service/api'
import { Container, PosterAnime } from './styles';


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
                        <PosterAnime src={anime.img_url} onClick={()=>{console.log(anime._id)}}/>
                    </li>)
                }
            </ul>
        </Container>
    );
}
