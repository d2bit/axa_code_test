import React from 'react'
import { injectGlobal } from 'styled-components'
import GnomesContainer from '../containers/GnomesContainer'

const App = () => {
  injectGlobal`
    body {
      margin: 0;
      font-family: sans-serif;
    }
  `
  return <GnomesContainer />
}

export default App
