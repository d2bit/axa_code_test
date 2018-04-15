import React from 'react'
import { render, wait } from 'react-testing-library'
import App from './App'
import DataDownloader from '../libs/dataDownloader'
import { getResponseData } from '../mocks'
jest.mock('../libs/dataDownloader')

describe('App', () => {
  it('renders without crashing', async () => {
    DataDownloader.get.mockResolvedValue(getResponseData(3))

    const { container } = render(<App />)

    await wait()
    expect(container).toMatchSnapshot()
  })
})
