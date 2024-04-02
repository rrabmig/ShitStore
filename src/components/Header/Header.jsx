import React from 'react'
import { Link } from 'react-router-dom'
import classes from './header.module.css'

const Header = () => {
    const linkStyle = {
        color:'azure'
    }

  return (
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
  )
}

export default Header