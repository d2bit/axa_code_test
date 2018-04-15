import React from 'react'

const DetailedGnome = ({ id, name, thumbnail, age, weitght, height, hair_color, professions, friends, closeFn }) => {
  return (
    <div data-testid={`DetailedGnome-${id}`}>
      <h3 data-testid='name'>{name}</h3>
      <img width='200px' data-testid='thumbnail' src={thumbnail} alt={name} />
      <button onClick={closeFn}>CLOSE</button>
    </div>
  )
}

export default DetailedGnome
