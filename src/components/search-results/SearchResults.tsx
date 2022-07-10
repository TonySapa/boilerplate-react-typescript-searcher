import React from 'react'

import { useStyles } from './SearchResults.styles'
import { SearchResultsProps } from './SearchResults.types'

const SearchResults = ({ children }: SearchResultsProps) => {
  const classes = useStyles()
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  )
}

export default SearchResults
