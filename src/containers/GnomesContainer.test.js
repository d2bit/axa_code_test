import React from 'react'
import { render, Simulate, wait } from 'react-testing-library'
import 'dom-testing-library/extend-expect'
import GnomesContainer from './GnomesContainer'
import { getGnome } from '../mocks'
import DataDownloader from '../libs/dataDownloader'
jest.mock('../libs/dataDownloader')

describe('GnomesContainer', () => {
  DataDownloader.get.mockResolvedValue({
    town: [
      getGnome(1, { name: 'Lola' }),
      getGnome(2, { name: 'Lucia' }),
      getGnome(3, { name: 'Paco' }),
      getGnome(4, { name: 'Nestor' }),
    ]
  })

  it('fetches the population', () => {
    render(<GnomesContainer />)

    expect(DataDownloader.get).toHaveBeenCalledTimes(1)
  })

  it('filters the population', async () => {
    const { getByTestId, container } = render(<GnomesContainer />)

    await wait()
    expect(container).toMatchSnapshot()
    expect(getByTestId('Gnome-1')).toHaveTextContent('Lola')
    const gnomeFilter = getByTestId('GnomeFilter')
    Simulate.change(gnomeFilter, { target: { value: 'P' } })
    await wait()
    expect(container).not.toHaveTextContent('Lola')
    expect(container).toMatchSnapshot()
  })
})
