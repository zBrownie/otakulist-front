import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core'
// import { Container } from './styles';

export default function Input({ name, ...rest }) {
    const inputRef = useRef(null)
    const { fieldName, defaultValue = "", registerField, error } = useField(name)


    useEffect(() => {

        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })

    }, [fieldName, registerField]);


    return <input ref={inputRef} defaultValue={defaultValue} {...rest} />
}
