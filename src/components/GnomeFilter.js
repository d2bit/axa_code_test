import React from 'react'
import styled from 'styled-components'

const Frame = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid #d2d2d2;
  width: 100%;
  padding-top: .5rem;
`
const Label = styled.label`
  padding: 0 1em 0;
`
const Input = styled.input`
  font-size: 1.5rem;
  padding: .2rem .5rem;
  border: 0;
  border-bottom: .5px solid #efefef;
`

class GnomeFilter extends React.PureComponent {
  state = {
    name: ''
  }

  handleChange = ev => {
    const { updater } = this.props
    ev.preventDefault()
    const { value } = ev.target

    this.setState({ name: value }, () => updater({ name: value }))
  }

  render() {
    const { name } = this.state

    return (
      <Frame>
        <Label htmlFor='GnomeFilter'>Filter</Label>
        <Input data-testid='GnomeFilter' name='GnomeFilter' value={name} onChange={this.handleChange} />
      </Frame>
    )
  }
}

export default GnomeFilter
