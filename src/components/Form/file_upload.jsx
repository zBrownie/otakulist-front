import React, { useRef, useEffect, useCallback } from 'react';
import { useField } from '@unform/core'
import { DropContainer, UploadMessage } from './styles';
import Dropzone from 'react-dropzone'

export default function Input({ name, onUpload, ...rest }) {
    const inputRef = useRef(null)
    const { fieldName, defaultValue = "", registerField, error } = useField(name)



    useEffect(() => {

        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })

    }, [fieldName, registerField]);

    const handleRenderMessage = (active, reject) => {
        if (!active) {
            return <UploadMessage>Arraste arquivos aqui...</UploadMessage>
        }

        if (reject) {
            return <UploadMessage type="error">Arquivo nao suportado...</UploadMessage>
        }

        return <UploadMessage type="success">Solte os arquivos...</UploadMessage>
    }

    return <Dropzone onDropAccepted={onUpload} accept="image/*">
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <DropContainer {...getRootProps()} isDragActive={isDragActive} isDragReject={isDragReject}>
                <input {...getInputProps()} ref={inputRef} defaultValue={defaultValue} {...rest} />
                {
                    handleRenderMessage(isDragActive, isDragReject)
                }
            </DropContainer>
            // <section>
            //     <div {...getRootProps()}>
            //         <input {...getInputProps()} ref={inputRef} defaultValue={defaultValue} {...rest} />
            //         <p>Drag 'n' drop some files here, or click to select files</p>
            //     </div>
            // </section>
        )}
    </Dropzone>


}
