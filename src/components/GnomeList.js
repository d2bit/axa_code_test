import React from 'react'
import Gnome from './Gnome'

function toGnome(profile) {
  return (
    <Gnome key={profile.id} {...profile} />
  )
}
const GnomeList = ({ population }) => {
  return (
    <div data-testid='GnomeList'>
      { population.map(toGnome) }
    </div>
  )
}

export default GnomeList
