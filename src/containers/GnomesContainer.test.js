import React from 'react'
import { render } from 'react-testing-library'
import GnomesContainer from './GnomesContainer'
import DataDownloader from '../libs/dataDownloader'
jest.mock('../libs/dataDownloader')

describe('GnomesContainer', () => {
  it('fetches the population', () => {
    DataDownloader.get.mockResolvedValue({})
    render(<GnomesContainer />)

    expect(DataDownloader.get).toHaveBeenCalledTimes(1)
  })
})
