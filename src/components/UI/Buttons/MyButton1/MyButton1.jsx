import React from 'react'
import classes from './myButton.module.css'

 const MyButton1 = ({children, ...props}) => {
  return (
    <button className={classes.addToCartButton} {...props}>
      {children}
    </button>
  )
}

export default MyButton1