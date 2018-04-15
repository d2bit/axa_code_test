import axios from 'axios'
import DataDownloader from './dataDownloader'
jest.mock('axios')

describe('.get', () => {
  const mockedResponse = require('../mocks/data.json')
  axios.get.mockResolvedValue({ data: mockedResponse })

  it('fetches a JSON', async () => {
    const expectedURL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'

    await DataDownloader.get()

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith(expectedURL)
  })

  it('returns the response data', async () => {
    const data = await DataDownloader.get()

    expect(data).toEqual(mockedResponse)
  })
})
