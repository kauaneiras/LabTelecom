import styled from "styled-components";

export default function DiscentesCard({name,photo, contato, curso, pgg, emprego, assunto, coorientador, data, link}) {
    function openLink(){if(link)window.open(link);}
    return (
        <>
            <Container onClick={()=> openLink()} linkprops={link}>
                <ProfilePic src={photo}/>
                <InfosContainer>
                    <PessoalName>{name}</PessoalName>
                    <hr style={{ width: "100%"}}/>
                    <PessoalInfo>
                        <PessoalContato><span>Contato:</span> {contato} </PessoalContato>
                        {pgg ? <PessoalPGG><span>PGG:</span> {pgg}</PessoalPGG> : <PessoalCurso><span>Engenharia:</span> {curso}</PessoalCurso>}
                        {emprego ? <PessoalEmprego><span>Emprego:</span> {emprego} </PessoalEmprego> : null}
                    </PessoalInfo>
                    <hr style={{ width: "100%"}}/>
                    <PesquisaAssunto><span>Assunto:</span> {assunto}</PesquisaAssunto>
                    <hr style={{ width: "100%"}}/>
                    <PesquisaInfo>
                        <PesquisaCoorientador><span>Coorientador:</span> {coorientador}</PesquisaCoorientador>
                        <PesquisaData><span>Data:</span> {data}</PesquisaData>
                    </PesquisaInfo>
                </InfosContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 4px solid rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    width: 95%;
    height: 100%;
    cursor: ${props => props.linkprops ? "pointer" : "default"};
    margin-bottom: 0.5%;
    
    &:hover {
        border: ${props => props.linkprops ? "4px solid rgba(2, 59, 122, 1)" : "4px solid rgba(0, 0, 0, 0.2)"};
        cursor: ${props => props.linkprops ? "pointer" : "default"};
        transition: 0.5s;
        background-color: ${props => props.linkprops ? "rgba(0, 0, 0, 0.02)" : "transparent"}
    }
`
const ProfilePic = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 5%;
    border: 3px solid #023B7A;
    margin: 30px;
`
const InfosContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    padding: 20px;
`

const PessoalInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;
    span {
        font-weight: bold;
        color: #023B7A;
    }
`

const PesquisaInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    span {
        font-weight: bold;
        color: #023B7A;
    }
`

const PessoalName = styled.h1`
    margin-right: 20px;
    font-weight: bold;
    font-size: 2em;
    color: #023B7A;
`
const PessoalContato = styled.h2`
    margin-right: 30px;
    font-weight: normal;
    font-size: 1.2em;
`
const PessoalCurso = styled.h2`
    margin-right: 30px;
    font-weight: normal;
    font-size: 1.2em;
`
const PessoalPGG = styled.h2`
    margin-right: 30px;
    font-weight: normal;
    font-size: 1.2em;
`
const PessoalEmprego = styled.h2`
    margin-right: 30px;
    font-weight: normal;
    font-size: 1.2em;
`
const PesquisaAssunto = styled.h2`
    margin-right: 30px;
    font-weight: normal;
    font-size: 1.2em;
    span {
        font-weight: bold;
        color: #023B7A; 
    }
`
const PesquisaCoorientador = styled.h2`
    margin-right: 30px;
    font-weight: normal;
    font-size: 1.2em;
`
const PesquisaData = styled.h2` 
    font-size: 1.2em;
    margin-right: 30px;
    font-weight: normal;
`