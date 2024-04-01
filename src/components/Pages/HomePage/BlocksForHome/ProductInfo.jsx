import React from 'react'
import CirclcesAndImages from '../../../UI/Animations/ImagesOnSircle.jsx/CirclcesAndImages'
import { Link } from 'react-router-dom'
import MyButton1 from '../../../UI/Buttons/MyButton1/MyButton1'
import classes from './productInfo.module.css'

const ProductInfo = () => {
  return (
    <div className={classes.productInfoContainer}>
        <div className={classes.left}>
          <CirclcesAndImages/>
        </div>
        <div className={classes.right}>
          <div className={classes.productText}>
            <h2> Производим для вас 40 лет</h2>
            <p> Более 100 позиций натуральных удобрений и вторично переработанной пищи. Дарим вторую жизнь тушкам мертвых кур и мусору прямо в ваших тарелках.</p>  
          </div>
          
          <div className={classes.visitStore}>
            <p>Посетите наш магазин</p>
            <MyButton1><Link to='/store'>Подробнее</Link></MyButton1>
          </div>
        </div>
    </div>
  )
}

export default ProductInfo