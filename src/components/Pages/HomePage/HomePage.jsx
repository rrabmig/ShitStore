import React from 'react'
import { Link } from 'react-router-dom'
import classes from './homePage.module.css'
import ProductInfo from './BlocksForHome/ProductInfo'
import BurialsInfo from './BlocksForHome/BurialsInfo'
import TeamInfo from './BlocksForHome/TeamInfo'

export const HomePage = () => {

  const linkStyle = {
    color:'azure'
  }

  return (
    <div className={classes.homePage}>
      <header className={classes.header}>
        <nav>
          <ul className={classes.navList} style={{listStyleType: 'none'}}>
            <li> <Link style={linkStyle} to='/team'>Наша команда</Link></li>
            <li> <Link style={linkStyle} to='/about'> О нас </Link></li>
            <li><Link style={linkStyle} to='/store'>Наши продукты</Link></li>
            <li>Вход / Регистрация</li>
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

      <footer className={classes.footer}>
        <div className={classes.columnContainer}>
          <div className={classes.column}>
            <h3>Узнайте больше о:</h3>
            <p> <Link style={linkStyle} to='/team'> Нашей команде</Link></p>
            <p> <Link style={linkStyle} to='/store'> Наших продуктах</Link> </p>
            <p> <Link style={linkStyle} to='/about'> Истории компании</Link> </p>
          </div>
          <div className={classes.column}>
            <h3>Мы в соцсетях:</h3>
            <p> <Link style={linkStyle} to='https://vk.com/rrabmig'> ВКонтанте</Link> </p>
            <p> Телеграм </p>
            <p style={{color:'coral'}}> Прошу примите</p>
            <p style={{color:'coral'}}> На работу</p>
          </div>
          <div className={classes.columnIMG}>
            <img alt='logo' src='/logo.jpg'/>
          </div>
        </div> 
        <div className={classes.rights}>
        "© 2024 ShitSrore. Все права защищены. Весь контент на данном сайте, включая тексты, изображения, графику, аудио- и видеофайлы, является интеллектуальной собственностью и частным владением название компании. Любое незаконное копирование, распространение или использование материалов с данного сайта без письменного согласия владельца запрещено. Все товарные знаки, логотипы и знаки обслуживания, используемые на сайте, являются собственностью соответствующих правообладателей. Использование их без разрешения запрещено. Пользователь соглашается не нарушать авторские права и права интеллектуальной собственности название компании и ее партнеров."
        </div>
      </footer>
    </div>
  )
}
