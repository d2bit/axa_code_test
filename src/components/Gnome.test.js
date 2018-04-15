import React from 'react'
import { render } from 'react-testing-library'
import 'dom-testing-library/extend-expect'
import { getGnome } from '../mocks'
import Gnome from './Gnome'

describe('Gnome', () => {
  it('shows the gnome information', () => {
    const gnomeId = 13
    const gnomeProfile = getGnome(gnomeId)

    const { getByTestId, container } = render(<Gnome {...gnomeProfile} />)

    expect(getByTestId('name')).toHaveTextContent(gnomeProfile.name)
    expect(getByTestId('thumbnail')).toHaveAttribute('src', gnomeProfile.thumbnail)
    expect(container).toMatchSnapshot()
  })
})
