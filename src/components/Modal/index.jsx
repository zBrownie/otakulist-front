import React from "react";

import { Container, PosterAnime } from "./styles";
import { MdPlayArrow, MdToday } from "react-icons/md";

export default function Modal({ data, close }) {
  return (
    <Container>
      <header>
        <h1>{data.title}</h1>
        <button onClick={close}>Fechar</button>
      </header>
      <main>
        <div className="anime-info">
          <PosterAnime src={data.img_url} />
          <div className="anime-icons">
            <div className="dia">
              <MdPlayArrow size={26} />
              <span>{data.dia}</span>
            </div>
            <div className="streaming">
              <MdToday size={26} />
              <span>{data.streaming ? "Passando" : "Hiato"}</span>
            </div>
          </div>
        </div>

        <div className="anime-desc">
          <span>{data.desc}</span>
        </div>
      </main>
      <footer>
        {data.link && (
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            Link Oficial
          </a>
        )}

        {data.link2 && (
          <a href={data.link2} target="_blank" rel="noopener noreferrer">
            Link Pirata
          </a>
        )}
      </footer>
    </Container>
  );
}
