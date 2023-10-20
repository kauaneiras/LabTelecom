import styled from "styled-components";
import React from "react";

export default function DocentesCard({ name, foto, email, telefone, endereçoProfissional, curriculo, resumo }) {
    return (
        <>
            <Container>
                <Center>
                <Info>
                    <Foto src={foto}/>
                    <PessoalInfo>
                        <Nome>{name}</Nome>
                        {email ? <Email>{email}</Email> : null}
                        {telefone ? <Telefone>{telefone}</Telefone> : null}
                        {endereçoProfissional ? <EndereçoProfissional>{endereçoProfissional}</EndereçoProfissional> : null}
                    </PessoalInfo>
                </Info>
                <hr style={{ width: "100%"}}/>
                <ButtonsInRow>
                    {curriculo && curriculo.lattes && (
                        <a href={curriculo.lattes} target="_blank" rel="noopener noreferrer">
                            <ButtonToCurriculo>Lattes</ButtonToCurriculo>
                        </a>
                    )}
                    {curriculo && curriculo.pesquisarUnB && (
                        <a href={curriculo.pesquisarUnB} target="_blank" rel="noopener noreferrer">
                            <ButtonToCurriculo>Pesquisar UNB</ButtonToCurriculo>
                        </a>
                    )}
                    {curriculo && curriculo.orcid && (
                        <a href={curriculo.orcid} target="_blank" rel="noopener noreferrer">
                            <ButtonToCurriculo>Orcid</ButtonToCurriculo>
                        </a>
                    )}
                    {curriculo && curriculo.linkedIn && (
                        <a href={curriculo.linkedIn} target="_blank" rel="noopener noreferrer">
                            <ButtonToCurriculo>LinkedIn</ButtonToCurriculo>
                        </a>
                    )}
                </ButtonsInRow>
                <hr style={{ width: "100%"}}/>
                <Resumo>
                    <h1>Resumo</h1>
                    <p>{resumo}</p>
                </Resumo>
                </Center>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 40px;
`;

const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const Info = styled.div`
    display: flex;
    padding-bottom: 50px;
`;

const Foto = styled.img`
    width: 150px;
    height: auto;
    margin-right: 40px;
    border-radius: 10%;
    border: 1px solid #004080;
`;

const PessoalInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 600px;
`;

const Nome = styled.h1`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const Email = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
`;

const Telefone = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
`;

const EndereçoProfissional = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
`;

const ButtonsInRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    background-color: #F5F5F5;
`;

const ButtonToCurriculo = styled.button`
    font-size: 18px;
    font-weight: 400;
    width: 110%;
    height: 40px;
    margin-right: 20px;
    background-color: #004080;
    color: #FFFFFF;
    border: none;

    &:hover {
        background-color: #124892;
        font-weight: 500;
        cursor: pointer;
        border: 1px solid #FFFFFF;
    }
`;

const Resumo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    background-color: #F5F5F5;
    padding-bottom: 50px;
`;
