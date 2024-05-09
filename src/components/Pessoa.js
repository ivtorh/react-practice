import React from 'react';

function Pessoa(props) {
    return (
        <>
            <img src={props.foto} alt={props.nome} />
            <h2><strong>Nome:</strong> {props.nome}</h2>
            <p><strong>Idade:</strong> {props.idade}</p>
            <p><strong>Profissão:</strong> {props.profissao}</p>
        </>
    );
}

export default Pessoa;