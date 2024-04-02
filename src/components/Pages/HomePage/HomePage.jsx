import React from 'react'
import { Link } from 'react-router-dom'
import classes from './homePage.module.css'
import ProductInfo from './BlocksForHome/ProductInfo'
import BurialsInfo from './BlocksForHome/BurialsInfo'
import TeamInfo from './BlocksForHome/TeamInfo'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'

export const HomePage = () => {

  const linkStyle = {
    color:'azure'
  }

  return (
    <div className={classes.homePage}>
      <Header/>

      <div className={classes.imageBackground}>
        <p className={classes.label1}> Производим лучшую органику для вас  </p>
      </div>

      <ProductInfo/>

      <BurialsInfo/>

      <TeamInfo/>

      <Footer/>
    </div>
  )
}
