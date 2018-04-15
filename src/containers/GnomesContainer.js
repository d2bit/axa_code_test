import React from 'react'
import DataDownloader from '../libs/dataDownloader'
import GnomeList from '../components/GnomeList'

class GnomesContainer extends React.Component {
  state = {
    population: []
  }

  async componentDidMount() {
    const globalPopulation = await DataDownloader.get()
    if (!globalPopulation) return

    const population = Object.values(globalPopulation)[0]
    this.setState({ population })
  }

  render() {
    const { population } = this.state
    return <GnomeList population={population} />
  }
}

export default GnomesContainer
