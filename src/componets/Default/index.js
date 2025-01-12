import React from "react";
import * as C from "./styles";
import { MdMessage } from 'react-icons/md';

const Default = () => {
    return (
        <C.Container>
            <MdMessage />
            <C.Title>Chat App</C.Title>
            <C.Info>
                Agora você pode enviar e receber mensagems sem precisar manter seu celular conectado a internet.
            </C.Info>
        </C.Container>
    );
};

export default Default;

