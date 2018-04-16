import React from 'react'
import Gnome from './Gnome'
import styled from 'styled-components'

const Frame = styled.div`
  margin-top: 50px;
`
function toGnome(props, gnomeId) {
  const { openDetailsFn, profile } = props
  const openFn = () => openDetailsFn(gnomeId)
  return (
    <Gnome key={profile.id} {...profile} openFn={openFn} />
  )
}
const GnomeList = ({ population, openDetailsFn }) => {
  const toGnome = profile => {
    const openFn = () => openDetailsFn(profile.id)
    return (
      <Gnome key={profile.id} {...profile} openFn={openFn} />
    )
  }

  return (
    <Frame data-testid='GnomeList'>
      { population.map(toGnome) }
    </Frame>
  )
}

export default GnomeList
