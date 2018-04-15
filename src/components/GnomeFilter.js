import React from 'react'

class GnomeFilter extends React.Component {
  state = {
    inputValue: ''
  }

  handleChange = ev => {
    ev.preventDefault()
    const { updater } = this.props
    const { value } = ev.target

    this.setState({ inputValue: value })
    updater({ name: value })
  }

  render() {
    const { inputValue } = this.state

    return (
      <div>
        <input data-testid='GnomeFilter' name='GnomeFilter' value={inputValue} onChange={this.handleChange} />
      </div>
    )
  }
}

export default GnomeFilter
