import React from 'react'
import classes from './registrtationPage.module.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import MyButton1 from '../../UI/Buttons/MyButton1/MyButton1'
import RegWindow from '../../RegWindow/RegWindow'

const RegistrationPage = () => {
  return (
    <div className={classes.registrationPage}>
      <Header/>
      <div className={classes.content}>
        <RegWindow/>
      </div>
      <Footer/>
    </div>
  )
}

export default RegistrationPage