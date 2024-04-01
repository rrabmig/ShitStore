import React from 'react'
import classes from './searchButton.module.css'

const SearchButton = ({children, ...props}) => {
  return (
    <button className={classes.searchButton} {...props}>
        <img 
            src={require('./search-icon-png-21.png')}
            className={classes.image}
        />
    </button>
  )
}

export default SearchButton