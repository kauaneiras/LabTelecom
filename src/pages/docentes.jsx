import React, { useState } from "react";
import ToggleButtons from "../components/topbutons";
import DocentesCard from "../components/docentesCard";
import professoresObject from "../objetos/professoresobject";

export default function DocentesPage() {
  const buttons = professoresObject.map((professor) => professor.Nome);
  const [activeButton, setActiveButton] = useState(professoresObject[0]);
  const handleButtonClick = (buttonName) => {
    const selectedProfessor = professoresObject.find(
      (professor) => professor.Nome === buttonName
    );
    setActiveButton(selectedProfessor);
  };

  return (
    <div>
      <ToggleButtons
        buttons={buttons}
        setActiveButton={handleButtonClick}
        activeButton={activeButton.Nome}
      />
      <DocentesCard
        name={activeButton.Nome}
        foto={activeButton.Foto}
        email={activeButton.Email}
        telefone={activeButton.Telefone}
        endereçoProfissional={activeButton.EndereçoProfissional}
        curriculo={activeButton.Curriculo}
        resumo={activeButton.Resumo}
      />
    </div>
  );
}
