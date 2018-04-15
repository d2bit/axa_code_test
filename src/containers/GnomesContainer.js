import React from 'react'
import DataDownloader from '../libs/dataDownloader'

class GnomesContainer extends React.Component {
  state = {
    population: []
  }

  async componentDidMount() {
    const population = await DataDownloader.get()
    if (population) this.setState({ population })
  }

  render() {
    return <div/>
  }
}

export default GnomesContainer
