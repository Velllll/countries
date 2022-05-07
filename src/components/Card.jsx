import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article`
  border-radius: var(--redii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
  color: var(--colors-text);
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 1rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const CardListItem = styled.li`
  margin: 0.5rem 0;
`;


const Card = ({img, name, info = [], onClick}) => {
  
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name}/>
      <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardList>
              {info.map(el => (
                  <CardListItem key={el.title}>
                      <b>{el.title}</b>: {el.discription}
                  </CardListItem>
              )
              )}
              </CardList>
      </CardBody>
    </Wrapper>
  )
}

export default Card
