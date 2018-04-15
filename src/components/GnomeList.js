import React from 'react'
import Gnome from './Gnome'

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
    <div data-testid='GnomeList'>
      { population.map(toGnome) }
    </div>
  )
}

export default GnomeList
