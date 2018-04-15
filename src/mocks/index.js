import data from './data.json'

const population = Object.values(data)[0]
const populationCount = population.length

export function getPopulation(size=5) {
  if (size >= populationCount) {
    return population
  }
  return population.slice(0, size)
}

export function getGnome(index) {
  if (index && index >= 0 && index < populationCount) {
    return population[index]
  }
  const randomIndex = Math.floor(Math.random() * populationCount)
  return population[randomIndex]
}

export function getResponseData() {
  return data
}

const Helper = {
  getPopulation,
  getGnome,
  getResponseData,
}

export default Helper
