import React from 'react'
import { render } from 'react-testing-library'
import App from './App'
import DataDownloader from '../libs/dataDownloader'
import { getResponseData } from '../mocks'
jest.mock('../libs/dataDownloader')

describe('App', () => {
  it('renders without crashing', () => {
    DataDownloader.get.mockResolvedValue(getResponseData())

    const { component } = render(<App />)

    expect(component).toMatchSnapshot()
  })
})
