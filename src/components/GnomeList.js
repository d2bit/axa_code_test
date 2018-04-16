import React from 'react'
import Gnome from './Gnome'
import styled from 'styled-components'

const Frame = styled.div`
  margin-top: 50px;
`
const GnomeList = ({ population, openDetailsFn }) => {
  const toGnome = profile => {
    return (
      <Gnome key={profile.id} {...profile} openDetailsFn={openDetailsFn} />
    )
  }

  return (
    <Frame data-testid='GnomeList'>
      { population.map(toGnome) }
    </Frame>
  )
}

export default GnomeList
