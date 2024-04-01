import React from 'react'
import { Link } from 'react-router-dom'
import classes from './homePage.module.css'
import CirclcesAndImages from '../../UI/Animations/ImagesOnSircle.jsx/CirclcesAndImages'
import MyButton1 from '../../UI/Buttons/MyButton1/MyButton1'
import ProductInfo from './BlocksForHome/ProductInfo'
import BurialsInfo from './BlocksForHome/BurialsInfo'
import TeamInfo from './BlocksForHome/TeamInfo'

export const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <header>
        <nav>
          <ul className={classes.navList}>
            <li> Наша команда</li>
            <Link to='/store'><li>Наши продукты</li></Link>
            <li>Зарегистрироваться</li>
            <li>Корзина</li>
          </ul>
        </nav>
      </header>

      <div className={classes.imageBackground}>
        <p className={classes.label1}> Производим лучшую органику для вас  </p>
      </div>

      <ProductInfo/>

      <BurialsInfo/>

      <TeamInfo/>

      

      
      HomePage
      <Link to='/store'>Store</Link>
    </div>
  )
}
