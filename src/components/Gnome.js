import React from 'react'

const Gnome = ({ id, name, thumbnail, age, weitght, height, hair_color, professions, friends, openFn }) => {
  return (
    <div data-testid={`Gnome-${id}`}>
      <h3 data-testid='name'>{name}</h3>
      <img width='200px' data-testid='thumbnail' src={thumbnail} alt={name} />
      <button onClick={openFn}>OPEN DETAILED</button>
    </div>
  )
}

export default Gnome
