import React from 'react';
import styled from 'styled-components';

export default function ParceirosCard({ name, description, image, link }) {
  const openLink = () => {
    if (link) window.open(link);
  };

  return (
    <CardContainer onClick={openLink}>
      <CardImage src={image} alt={name} />
      <Infos>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{description}</CardDescription>
      </Infos>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 90%;
  height: auto;
  cursor: pointer;
  margin: 10px;
  background-color: #fffff;

  &:hover {
    border: 2px solid #004080; /* Change to the desired hover color */
    transition: 0.3s;
    background-color: rgba(0, 64, 128, 0.1); /* Change to the desired hover background color */
  }
`

const CardImage = styled.img`
  width: 200px;
  height: 200px;
  background-color: white;
  object-fit: contain;
  border-radius: 10px 10px 0 0;
`;

const CardTitle = styled.h2`
  margin: 10px;
  font-size: 1.5em;
  color: #023B7A; /* Change to the desired title color */
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-left: 5%;
`;

const CardDescription = styled.p`
text-align: justify;
  margin: 10px;
  font-size: 1em;
  text-align: center;
`;
