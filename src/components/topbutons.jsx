import styled from "styled-components";

export default function ToggleButtons({ buttons, setActiveButton, activeButton }) {
  const mostrarConteudo = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <ButtonContainer>
        {buttons.map((button) => (
          <Button
            key={button}
            active={activeButton === button}
            onClick={() => mostrarConteudo(button)}
          >
            {button}
          </Button>
        ))}
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #f0f0f0;
`;

const Button = styled.button`
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 5px;
  font-size: 20px;
  background-color: ${props => (props.active ? "#458107" : "transparent")};
  color: ${props => (props.active ? "white" : "initial")};
  font-weight: ${props => (props.active ? "bold" : "initial")};
  border: 1px solid #dddddd;
`;

const Content = styled.div`
  display: ${props => (props.active ? "block" : "none")};
  padding: 20px;
  background-color: #ffffff;
  margin-top: 20px;
`;
