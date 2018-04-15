import React from 'react'
import { render } from 'react-testing-library'
import { getPopulation } from '../mocks'
import GnomeList from './GnomeList'

describe('GnomeList', () => {
  it('creates Gnomes', () => {
    const populationSize = 3
    const population = getPopulation(populationSize)
    const { container } = render(<GnomeList population={population} />)

    expect(container).toMatchSnapshot()
  })
})
