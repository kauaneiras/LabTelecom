import React from 'react';
import styled from 'styled-components';

export default function ParceirosCard({ name, description, image, link }) {
  const openLink = () => {
    if (link) window.open(link);
  };

  return (
    <CardContainer onClick={openLink}>
      <CardImage src={image} alt={name} />
      <CardTitle>{name}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 300px;
  height: 500px;
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
  width: 300px;
  height: 300px;
  background-color: white;
  object-fit: contain;
  border-radius: 10px 10px 0 0;
`;

const CardTitle = styled.h2`
  margin: 10px;
  font-size: 1.5em;
  color: #023B7A; /* Change to the desired title color */
`;

const CardDescription = styled.p`
text-align: justify;
  margin: 10px;
  font-size: 1em;
  text-align: center;
`;
