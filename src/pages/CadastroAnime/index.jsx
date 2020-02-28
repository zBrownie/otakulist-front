import React, { useState } from 'react';
import { uniqueId } from 'lodash'
import filesize from 'filesize'
import { Container } from './styles';
import { Form } from '@unform/web'
import Input from '../../components/Form/input'
import TextAreaUnform from '../../components/Form/textarea'
import SelectUnform from '../../components/Form/select'
import Upload from '../../components/Upload'
import FileList from '../../components/FileList'

import api from '../../service/api'

export default function CadastroAnime() {

    const handleSubmit = data => {

        let data2 = { ...data, dia: handleDay(data.pos), img_url: '' }

        hanldeProcessUpload(uploaded, data2)

        console.log(data2)
    }

    const handleDay = date => {
        switch (date) {
            case 1:
                return "Segunda"
            case 2:
                return "Terça"
            case 3:
                return "Quarta"
            case 4:
                return "Quinta"
            case 5:
                return "Sexta"
            case 6:
                return "Sabado"
            case 0:
                return "Domingo"
            default:
                return "Error"
        }
    }

    const optionsStreaming = [
        { value: false, label: 'Não' },
        { value: true, label: 'Sim' }
    ]

    const optionsPos = [
        { value: 1, label: 'Segunda' },
        { value: 2, label: 'Terça' },
        { value: 3, label: 'Quarta' },
        { value: 4, label: 'Quinta' },
        { value: 5, label: 'Sexta' },
        { value: 6, label: 'Sabado' },
        { value: 0, label: 'Domingo' }
    ]

    const [uploaded, setuploaded] = useState({});

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
            url: null,
        }
        setuploaded(uploadedFile)


        // const uploadedFile = files.map(file => ({
        //     file,
        //     id: uniqueId(),
        //     name: file.name,
        //     readableSize: filesize(file.size),
        //     preview: URL.createObjectURL(file),
        //     progress: 0,
        //     uploaded: false,
        //     error: false,
        //     url: null,
        // }))

        // setuploaded(uploadedFile)

        // uploadedFile.forEach(hanldeProcessUpload)
    }

    async function hanldeProcessUpload(file, animeinfo) {
        const data = new FormData()
        data.append('file', file.file, file.name)
        data.append(animeinfo)
        
        const resp = await api.post('/animes', data, {
            onUploadProgress: e => {
                let progress = parseInt(Math.round((e.loaded * 100) / e.total))

                setuploaded({ ...uploaded, progress })
                // handleUploadedState(file.id, {
                //     progress
                // })
                console.log(progress)
            }
        })
        console.log(resp)
        setuploaded({ ...uploaded, uploaded: true, id: resp.data._id, url: resp.data.url })
        // .then(
        //     response => {

        //         setuploaded({ ...uploaded, uploaded: true, id: response.data._id, url: response.data.url })
        //         // handleUploadedState(file.id, {
        //         //     uploaded: true,
        //         //     id: response.data._id,
        //         //     url: response.data.url
        //         // })
        //         console.log(response.data)

        //     }
        // ).catch(error => {

        //     setuploaded({ ...uploaded, error: true })
        //     // handleUploadedState(file.id, {
        //     //     error: true
        //     // })
        // })


    }

    function handleUploadedState(id, data) {

        let arrayTemp = Array.from(uploaded)

        arrayTemp.map(file => {
            return file.id === id ? { ...file, ...data } : file
        })
        setuploaded(arrayTemp)
    }

    return (
        <Container>
            {console.log(uploaded)}
            {/* <div>
                <Upload onUpload={handleUpload} />
                <FileList files={uploaded} />
            </div> */}
            <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <h1>Cadastro</h1>
                <Upload name="img_url" className="uploadinput" onUpload={handleUpload} />
                {
                    !!uploaded.length && <FileList file={uploaded} />
                }
                <label htmlFor="title">Titulo</label>
                <Input name="title" type="text" />

                <label htmlFor="link">Link Oficial</label>
                <Input name="link" type="text" />

                <label htmlFor="link2">Link Pirata</label>
                <Input name="link2" type="text" />

                <label htmlFor="pos">Dia que passa</label>
                <SelectUnform name="pos" options={optionsPos} className="selecte" />

                <label htmlFor="streaming">Passando</label>
                <SelectUnform name="streaming" options={optionsStreaming} className="selecte" />

                <label htmlFor="descricao">Sinopse</label>
                <TextAreaUnform name="descricao"></TextAreaUnform>

                <button type="submit">OK</button>
            </Form>
        </Container>
    );
}
