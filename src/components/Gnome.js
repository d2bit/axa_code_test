import React from 'react'

const Gnome = ({ id, name, thumbnail, age, weitght, height, hair_color, professions, friends }) => {
  return (
    <div data-testid={`Gnome-${id}`}>
      <h3 data-testid='name'>{name}</h3>
      <img data-testid='thumbnail' src={thumbnail} alt={name} />
    </div>
  )
}

export default Gnome
