import React from 'react'
import { render, screen } from '@testing-library/react'
import SearchResults from './SearchResults'

describe('Block of tests', () => {
  test('renders children text', () => {
    render(<SearchResults>Hola</SearchResults>)
    const demoElement = screen.getByText(/Hola/i)
    expect(demoElement).toBeInTheDocument()
  })
})
