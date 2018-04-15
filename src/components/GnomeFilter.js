import React from 'react'

const GnomeFilter = ({ filter, updater }) => {
  const handleChange = ev => {
    ev.preventDefault()
    const { value } = ev.target

    updater({ name: value })
  }

  const { name } = filter

  return (
    <div>
      <input data-testid='GnomeFilter' name='GnomeFilter' value={name} onChange={handleChange} />
    </div>
  )
}

export default GnomeFilter
