import React from 'react';

import { Container, FileInfo, Preview } from './styles';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

import { MdCheckCircle, MdError, MdLink } from 'react-icons/md'

export default function FileList({ file }) {


    return (
        <Container>
            <li key={file.id}>
                <FileInfo>
                    <Preview src={file.preview} />
                    <div>
                        <strong>{file.name}</strong>
                        <span>{file.readableSize}
                            {
                                !!file.url && <button onClick={() => { }}>Excluir</button>
                            }
                        </span>

                    </div>

                </FileInfo>
                <div>
                    {
                        !file.uploaded && !file.error && (
                            <CircularProgressbar styles={buildStyles({
                                textSize: '20px',
                                trailColor: '#d6d6d6',
                            })}
                                strokeWidth={10}
                                text={`${file.progress}%`}
                                value={file.progress}

                                className="progressbar"
                            />
                        )
                    }

                    {
                        file.url && (
                            <a href={file.url} target="_blank" rel="noopener noreferrer">
                                <MdLink style={{ marginRight: 8 }} size={23} color="#222" />
                            </a>
                        )
                    }

                    {
                        file.uploaded && <MdCheckCircle color="#78e5d5" size={24} />
                    }
                    {
                        file.error && <MdError color="#e57878" size={24} />
                    }
                </div>
            </li>
        </Container>
    );
}
