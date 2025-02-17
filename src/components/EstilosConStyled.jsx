import styled, { keyframes } from "styled-components";
import "./vars.css";
import React, { Component } from "react";

class EstilosConStyled extends Component {
    render() {
        const animacionTexto = keyframes`
        // from{
        // background:yellow;
        // }
        // to{
        // background:blue;

        0%{
        background:yellow;
        }
        50%{
        background:blue;
        }
        100%{
        background:yellow;
        }
}
`

        const FondoColorTexto = {
            background: 'linear-gradient(120deg,red,blue)',
            color: "green",
        }
        const Titulo = styled.h1`
            color: var(--colorTexto);
            transition:all 0.8s;

            // hover se conoce como una pseudoclase

            &:hover{
            color:black;
            }

            // aplicacion de media queries
            @media(max-width : 800px){
            background:green;
            }
        `
            ;

        const Cabecera = styled.header`
            background: var(--colorHeader);
            padding: 20px;
        `;
        const Parrafo = styled.header`
            background: ${FondoColorTexto.background};
          color: ${FondoColorTexto.color};
          animation:${animacionTexto} 2s linear infinite;
        `;

        return (
            <Cabecera>
                <Titulo>Estamos en StyledComponents</Titulo>
                <Parrafo>
                    Este es  un mensaje del parrafo
                </Parrafo>
            </Cabecera>
        );
    }
}

export default EstilosConStyled;
