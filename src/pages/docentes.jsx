import ToggleButtons from "../components/topbutons";
import React, { useState } from "react";

export default function DocentesPage() {
    const buttons = ["Daniel Costa Araújo", "Sébastien Roland Marie Joseph Rondineau"];
    const [activeButton, setActiveButton] = useState(buttons[0]);

    const buttonToURL = {
        "Daniel Costa Araújo": "http://pesquisar.unb.br/professor/daniel-costa-araujo",
        "Sébastien Roland Marie Joseph Rondineau": "http://www.pesquisar.unb.br/professor/sebastien-roland-marie-joseph-rondineau"
    };

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <div>
            <ToggleButtons buttons={buttons} setActiveButton={handleButtonClick} activeButton={activeButton} />
            <iframe
                src={buttonToURL[activeButton]}
                style={{ width: '100%', height: '100vh', border: 'none' }}
            />
        </div>
    );
};

