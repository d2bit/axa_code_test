import React from 'react'
import DataDownloader from '../libs/dataDownloader'
import GnomeList from '../components/GnomeList'
import GnomeFilter from '../components/GnomeFilter'

class GnomesContainer extends React.Component {
  state = {
    population: [],
    filter: {
      name: '',
    },
  }

  async componentDidMount() {
    const globalPopulation = await DataDownloader.get()
    if (!globalPopulation) return

    const population = Object.values(globalPopulation)[0]
    this.setState({ population })
  }

  updateFilter = (filter) => {
    this.setState({ filter })
  }

  filteredPopulation = () => {
    const { population, filter } = this.state
    let filtered = population.filter(gnome =>
      gnome.name.toLowerCase().includes(filter.name.toLowerCase())
    )
    return filtered
  }

  render() {
    return (
      <React.Fragment>
        <GnomeFilter updater={this.updateFilter} />
        <GnomeList population={this.filteredPopulation()} />
      </React.Fragment>
    )
  }
}

export default GnomesContainer
