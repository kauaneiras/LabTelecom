import React, { useState, useEffect } from "react";
import ToggleButtons from "../components/topbutons";
import ParceirosCard from "../components/parceirosCard";
import { ParceirosCorporativos, UniversidadesParceiras } from "../objetos/parceitosexternosobject";
import styled from "styled-components";

export default function ParceirosPage() {
    const buttons = ["Todos", "Corporativos", "Universidades"]; // Add "Todos" and "Universidades"
    const [activeButton, setActiveButton] = useState(buttons[0]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredParceiros, setFilteredParceiros] = useState([]);

    // Function to sort partners alphabetically
    const sortAlphabetically = (parceiros) => {
        return parceiros.sort((a, b) => a.nome.localeCompare(b.nome));
    };

    // Function to filter partners based on the active button
    const filterPartners = () => {
        if (activeButton === "Todos") {
            return sortAlphabetically([...ParceirosCorporativos, ...UniversidadesParceiras]);
        } else if (activeButton === "Corporativos") {
            return sortAlphabetically([...ParceirosCorporativos]);
        } else if (activeButton === "Universidades") {
            return sortAlphabetically([...UniversidadesParceiras]);
        }
    };

    // Sort the partners alphabetically initially
    useEffect(() => {
        setFilteredParceiros(filterPartners());
    }, [activeButton]);

    const handleSearch = (event) => {
        const input = event.target.value;
        setSearchInput(input);
        const filteredParceiros = filterPartners().filter((parceiro) => {
            return parceiro.nome.toLowerCase().includes(input.toLowerCase());
        });

        // Sort the filtered partners alphabetically
        setFilteredParceiros(sortAlphabetically(filteredParceiros));
    };

    return (
        <PageContainer>
            <PageContainer2>
                <ToggleButtons
                    buttons={buttons}
                    activeButton={activeButton}
                    setActiveButton={setActiveButton}
                /></PageContainer2>

            <SearchInput
                type="text"
                placeholder="Search by name"
                value={searchInput}
                onChange={handleSearch}
            />
            <PartnerListContainer>
                {filteredParceiros.map((parceiro, index) => (
                    <ParceirosCard
                        key={index}
                        name={parceiro.nome}
                        description={parceiro.descricao}
                        image={parceiro.logo}
                        link={parceiro.link}
                    />
                ))}
            </PartnerListContainer>

        </PageContainer>
    );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageContainer2 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin-top: 20px;
  font-size: 1em;
  width: 400px;
  margin-bottom: 20px;
`;

const PartnerListContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;