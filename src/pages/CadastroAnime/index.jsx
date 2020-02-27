import React from 'react';

import { Container } from './styles';
import { Form } from '@unform/web'
import Input from '../../components/Form/input'
import TextAreaUnform from '../../components/Form/textarea'
import SelectUnform from '../../components/Form/select'

export default function CadastroAnime() {

    const handleSubmit = data => {
        let data2 = { ...data, dia: handleDay(data.pos) }
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

    return (
        <Container>
            <Form onSubmit={handleSubmit}>

                <Input name="img_url" type="file" />

                <Input name="title" type="text" />
                <Input name="link" type="text" />
                <Input name="link2" type="text" />

                <SelectUnform name="pos" options={optionsPos} className="selecte" />
                <SelectUnform name="streaming" options={optionsStreaming} className="selecte" />

                <TextAreaUnform name="descricao"></TextAreaUnform>

                <button type="submit">OK</button>
            </Form>
        </Container>
    );
}
