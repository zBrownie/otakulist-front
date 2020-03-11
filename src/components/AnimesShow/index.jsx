import React, { useState } from "react";

import { Container, PosterAnime } from "./styles";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import ModalBody from "../../components/Modal";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export default function AnimesShow({ title, data, show = false }) {
  const [selectedAnime, setselectedAnime] = useState({});

  const [showModal, hideModal] = useModal(
    () => (
      <ReactModal isOpen ariaHideApp={false} style={modalStyles}>
        <ModalBody data={selectedAnime} close={hideModal} />
      </ReactModal>
    ),
    [selectedAnime]
  );

  function openModal(anime) {
    setselectedAnime(anime);

    showModal();
  }

  return (
    <Container>
      <h1>{title}</h1>
      {data.length > 0 ? (
        <ul>
          {data.map(anime => (
            <li key={anime._id}>
              <PosterAnime src={anime.img_url} onClick={() => openModal(anime)}>
                {!!show && <span>{anime.dia}</span>}
              </PosterAnime>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sem anime</p>
      )}
    </Container>
  );
}
