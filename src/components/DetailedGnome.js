import React from 'react'
import styled from 'styled-components'

const List = ({ title, array }) => {
  if (array.length === 0) return null

  const Title = styled.h3`
    text-transform: capitalize;
    margin: 1rem 0 0.5rem;
  `
  const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  `
  const Item = styled.li`
    padding: .3rem 1rem;
    display: inline-block;
    border: 1px solid;
    border-radius: 10px;
    margin: .3rem;
  `
  const toListItem = item => {
    return (
      <Item key={item}>
        {item}
      </Item>
    )
  }
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <List data-testid={title}>
        {array.map(toListItem)}
      </List>
    </React.Fragment>
  )
}

const Modal = styled.div`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.8);
  display: flex;
`
const Frame = styled.article`
  background-color: whitesmoke;
  margin 3rem;
  padding: 1rem 2rem;
  width: 100%;
  align-self: center;
  border: 1px solid grey;
  border-radius: 50px 19px;
`
const Title = styled.h1`
`
const Thumbnail = styled.img`
  width: 100%;
  max-height: 200px;
  height: auto;
  border: 1px solid black;
`
const Details = profile => {
  const Details = styled.dl`
  `
  const DetailTitle = styled.dt`
    display: inline-block;
    width: 40%;
    margin: 0;
    font-weight: 600;
    text-transform: capitalize;
  `
  const DetailValue = styled.dd`
    display: inline-block;
    width: 60%;
    margin: 0;
  `
  const content = Object.keys(profile).map((key, index) => {
    return (
      <React.Fragment key={index}>
        <DetailTitle>{key}</DetailTitle>
        <DetailValue>{profile[key]}</DetailValue>
      </React.Fragment>
    )
  })
  return (
    <Details data-testid='Details'>
      {content}
    </Details>
  )
}

const DetailedGnome = ({ id, name, thumbnail, age, weight, height, hair_color, professions, friends, closeFn }) => {
  if (isNaN(id)) return null
  const avoidClosing = ev => ev.stopPropagation()
  const profileInfo = { age, weight, height, 'hair color': hair_color }

  return (
    <Modal data-testid={`DetailedGnome-${id}`} onClick={closeFn}>
      <Frame onClick={avoidClosing}>
        <Title data-testid='name'>{name}</Title>
        <Thumbnail data-testid='thumbnail' src={thumbnail} alt={name} />
        <Details {...profileInfo} />
        <List title='professions' array={professions} />
        <List title='friends' array={friends} />
      </Frame>
    </Modal>
  )
}

export default DetailedGnome
