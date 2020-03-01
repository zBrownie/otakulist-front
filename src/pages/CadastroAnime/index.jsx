import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../service/api";
import { uniqueId } from "lodash";
import filesize from "filesize";

import { Container } from "./styles";
import { Form } from "@unform/web";
import Input from "../../components/Form/input";
import TextAreaUnform from "../../components/Form/textarea";
import SelectUnform from "../../components/Form/select";
import Upload from "../../components/Upload";
import FileList from "../../components/FileList";

export default function CadastroAnime() {
  const [uploaded, setuploaded] = useState({});
  const history = useHistory();

  const handleDay = date => {
    switch (date) {
      case 1:
        return "Segunda";
      case 2:
        return "Terça";
      case 3:
        return "Quarta";
      case 4:
        return "Quinta";
      case 5:
        return "Sexta";
      case 6:
        return "Sabado";
      case 0:
        return "Domingo";
      default:
        return "Error";
    }
  };

  const optionsStreaming = [
    { value: false, label: "Não" },
    { value: true, label: "Sim" }
  ];

  const optionsPos = [
    { value: 1, label: "Segunda" },
    { value: 2, label: "Terça" },
    { value: 3, label: "Quarta" },
    { value: 4, label: "Quinta" },
    { value: 5, label: "Sexta" },
    { value: 6, label: "Sabado" },
    { value: 0, label: "Domingo" }
  ];

  function handleUpload(files) {
    let uploadedFile = {
      file: files[0],
      id: uniqueId(),
      name: files[0].name,
      readableSize: filesize(files[0].size),
      preview: URL.createObjectURL(files[0]),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    };
    console.log(files);
    setuploaded(uploadedFile);
    hanldeProcessUpload(uploadedFile);
  }

  function hanldeProcessUpload(file) {
    const data = new FormData();
    data.append("file", file.file, file.name);

    api
      .post("/images", data, {
        onUploadProgress: e => {
          let progress = parseInt(Math.round((e.loaded * 100) / e.total));

          setuploaded({ ...uploaded, progress });

          console.log(progress);
        }
      })
      .then(response => {
        setuploaded({
          ...uploaded,
          uploaded: true,
          id: response.data._id,
          url: response.data.url
        });
      })
      .catch(error => {
        setuploaded({ ...uploaded, error: true });
      });
  }

  const handleSubmit = async data => {
    try {
      if (uploaded.url) {
        let animedata = {
          ...data,
          dia: handleDay(data.pos),
          img_url: uploaded.url
        };
        console.log(animedata);
        await api
          .post("/animes", animedata)
          .then(response => {
            history.push("/lista");
          })
          .catch(error => {
            console.log("ERRO CADASTRAR ANIME", error);
          });
      } else {
        console.log("Gerando Link, Tente denovo...");
      }
    } catch (err) {
      console.log("Erro upload", err);
    }
  };

  async function handleDelete(id) {
    await api.delete(`/images/${id}`);

    setuploaded({});
  }

  return (
    <Container>
      {console.log(uploaded.url)}

      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <h1>Cadastro</h1>
        <Upload
          name="img_url"
          className="uploadinput"
          onUpload={handleUpload}
        />
        {!!Object.entries(uploaded).length && (
          <FileList file={uploaded} onDelete={handleDelete} />
        )}
        <label htmlFor="title">Titulo</label>
        <Input name="title" type="text" />

        <label htmlFor="link">Link Oficial</label>
        <Input name="link" type="text" />

        <label htmlFor="link2">Link Pirata</label>
        <Input name="link2" type="text" />

        <label htmlFor="pos">Dia que passa</label>
        <SelectUnform name="pos" options={optionsPos} className="selecte" />

        <label htmlFor="streaming">Passando</label>
        <SelectUnform
          name="streaming"
          options={optionsStreaming}
          className="selecte"
        />

        <label htmlFor="desc">Sinopse</label>
        <TextAreaUnform name="desc"></TextAreaUnform>

        <button type="submit" disabled={!uploaded.url}>
          OK
        </button>
      </Form>
    </Container>
  );
}
