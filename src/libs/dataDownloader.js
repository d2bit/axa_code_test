import axios from 'axios'

const DATA_URL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'

export async function get() {
  const response = await axios.get(DATA_URL)
  const data = response.data
  return data
}

const DataDownloader = {
  get,
}

export default DataDownloader
