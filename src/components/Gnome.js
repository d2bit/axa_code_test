import React from 'react'
import styled from 'styled-components'

const Frame = styled.article`
  background-color: #f9f9f9;
  margin: .3rem 0;
  padding: 1rem 2rem;
  border: 1px solid #ececec;
`
const Title = styled.h1`
  margin: .2rem 0 0;
`
const Thumbnail = styled.img`
  width: 100%;
  max-height: 200px;
  height: auto;
  border: 1px solid #b5b5b5;
`
const Actions = styled.div`
  display: flex;
  justify-content: space-around;
`
const Counter = ({ title, count }) => {
  const Counter = styled.dl`
    margin: 0;
    border-bottom: 1px solid #c5c5c5;
  `
  const Title = styled.dt`
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: capitalize;
  `
  const Count = styled.dd`
    margin: 0;
    font-size: 3rem;
    text-align: center;
  `

  return (
    <Counter>
      <Title>{title}</Title>
      <Count>{count}</Count>
    </Counter>
  )
}
const Button = styled.button`
  background-color: #4CAF50;
  font-size: 1.5rem;
  color: #ffffff;
  border: 1px solid #316934;
  border-radius: 50%;
`

const Gnome = ({ id, name, thumbnail, age, weitght, height, hair_color, professions, friends, openFn }) => {
  return (
    <Frame data-testid={`Gnome-${id}`}>
      <Title data-testid='name'>{name}</Title>
      <Thumbnail width='200px' data-testid='thumbnail' src={thumbnail} alt={name} />
      <Actions>
        <Counter title='Friends #' count={friends.length} />
        <Counter title='Professions #' count={professions.length} />
        <Button onClick={openFn}>OPEN</Button>
      </Actions>
    </Frame>
  )
}

export default Gnome
