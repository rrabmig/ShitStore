import React from 'react'
import { useState } from 'react'
import classes from './cartPage.module.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const CartPage = () => {

    const [authorized, setAuthorized] = useState(false)

    if (authorized) {
        return (
            <div className={classes.cartPage}>
                <Header/>
                <div className={classes.content}>
                    Корзина
                </div>
                <Footer/>
            </div>
          )
    } else {
        return (
            <div className={classes.cartPage}>
                <Header/>
                <div className={classes.content}>
                    <div className={classes.window}>
                        Корзина доступна только авторизованным пользвателям
                    </div>
                </div>
                <Footer/>
            </div>
          )
    }
  
}

export default CartPage