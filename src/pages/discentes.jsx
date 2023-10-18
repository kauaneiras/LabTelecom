import DiscentesCard from "../components/discentesCard";
import ToggleButtons from "../components/topbutons";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import {Mestrado, TCC, Doutorado, PosDoutorado, IniciacaoCientifica,} from "../objetos/alunosobject.jsx";

export default function DiscentesPage() {
  const buttons = ["Todos", "Pós-Doutorado", "Doutorado", "Mestrado", "TCC", "Iniciação Científica"];
  const [activeButton, setActiveButton] = useState(buttons[0]);
  const [selectedOption, setSelectedOption] = useState("nomeAZ");
  const [alunos, setAlunos] = useState([]);
  const [filteredAlunos, setFilteredAlunos] = useState([]);

  const options = [{ value: "nomeAZ", label: "Nome (A-Z)" },{ value: "maisAntigos", label: "Mais antigos" },{ value: "atual", label: "Atual" },{ value: "coorientador", label: "Coorientador" },];

  useEffect(() => {
    if (activeButton === "Todos") {setAlunos([...Mestrado, ...TCC, ...Doutorado, ...PosDoutorado, ...IniciacaoCientifica]);} 
    else if (activeButton === "Mestrado") {setAlunos([...Mestrado]);} 
    else if (activeButton === "TCC") {setAlunos([...TCC]);} 
    else if (activeButton === "Doutorado") {setAlunos([...Doutorado]);} 
    else if (activeButton === "Pós-Doutorado") {setAlunos([...PosDoutorado]);} 
    else if (activeButton === "Iniciação Científica") {setAlunos([...IniciacaoCientifica]);}
  }, [activeButton]);

  useEffect(() => {const sortedAlunos = ordenarAlunos(alunos, selectedOption); setFilteredAlunos(sortedAlunos);}, [alunos, selectedOption]);

  const ordenarAlunos = (alunos, opcao) => {
    const clonedAlunos = [...alunos];
    if (opcao === "nomeAZ") {return clonedAlunos.sort((a, b) => a["Nome completo"].localeCompare(b["Nome completo"]));} 
    else if (opcao === "maisAntigos") {return clonedAlunos.sort((a, b) => parseInt(a.Data) - parseInt(b.Data));} 
    else if (opcao === "atual") {return clonedAlunos.sort((a, b) => {const parseData = (data) => (data === "em andamento" ? Infinity : parseInt(data)); const dataA = parseData(a.Data); const dataB = parseData(b.Data); return dataB - dataA;});} 
    else if (opcao === "coorientador") {return clonedAlunos.sort((a, b) =>(a["(co)orientador"] || "").localeCompare(b["(co)orientador"] || ""));}
    else {return clonedAlunos;}};

  return (
    <>
      <ToggleButtons buttons={buttons} setActiveButton={setActiveButton} activeButton={activeButton} />
      <div style={{marginTop: '20px'}}>
        <Label>Ordenar por:</Label>
        <Select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          {options.map((option, index) => (<Option key={index} value={option.value}>{option.label}</Option>))}
        </Select>
      </div>
      <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        {filteredAlunos.map((aluno, index) => (
          <DiscentesCard
            key={index}
            name={aluno["Nome completo"]}
            photo={aluno.Foto}
            contato={aluno.Contato}
            curso={aluno.Engenharia}
            pgg={aluno.PGG}
            emprego={aluno.Emprego}
            assunto={aluno.Assunto}
            coorientador={aluno["(co)orientador"]}
            data={aluno.Data}
            link={aluno.Link}
          />
        ))}
      </div>
    </>
  );
}

const Label = styled.label`
  margin-right: 10px;
  font-size: 20px;
  font-size: 1.5em;
`;

const Select = styled.select`
  padding: 5px;
  margin-bottom: 20px;
  font-size: 1.2em;
`;

const Option = styled.option`
  font-size: 1em;
`;
