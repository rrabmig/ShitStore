import React from 'react'
import classes from './ItemCard.module.css'
import MyButton1 from '../UI/Buttons/MyButton1/MyButton1'

const ItemCard = ({Item}) => {
  return (
    <div className = {classes.itemCard} key={Item.id}>

      <div className={classes.photoContainer}>
        <img className={classes.image} src={Item.src} alt={Item.name}></img>
      </div>

      <div className={classes.infoContainer}>

        <div className={classes.textContainer}>
          <h3>{Item.name}</h3>
          <p>{Item.description}</p>
        </div>

        <div className={classes.actualInfoContainer}>
          <p> В наличии <i>{Item.count}</i> шт.</p>
          <p>{Item.weight} кг/шт.</p>
          <p>{Item.price} руб.</p>
          <MyButton1>
            Добавить в корзину
          </MyButton1>
        </div>

      </div>

    </div>
  )
}

export default ItemCard