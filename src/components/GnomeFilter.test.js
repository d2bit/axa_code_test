import React from 'react'
import { render, Simulate, wait } from 'react-testing-library'
import 'dom-testing-library/extend-expect'
import { getGnome } from '../mocks'
import GnomeFilter from './GnomeFilter'

describe('GnomeFilter', () => {
  it('shows the gnome information', () => {
    const updaterFn = jest.fn()
    const filter = { name: '' }

    const { getByTestId, container } = render(<GnomeFilter filter={filter} updater={updaterFn} />)
    expect(container).toMatchSnapshot()

    const filterInput = getByTestId('GnomeFilter')
    Simulate.change(filterInput, { target: { value: 'P' } })
    expect(updaterFn).toHaveBeenCalledTimes(1)
    expect(updaterFn).toHaveBeenCalledWith({ name: 'P' })
  })
})
