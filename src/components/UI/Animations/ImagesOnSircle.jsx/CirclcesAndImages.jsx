import React from 'react'
import classes from './circleAndImages.module.css'

const CirclcesAndImages = () => {
  return (
    <div className={classes.circleContainer}>
          <div className={classes.animatedCircle1}/>
          <div className={classes.animatedCircle2}/>
          <div className={classes.animatedCircle3}/>
          <div className={classes.imageCircle}>
            <img 
              className={classes.image1} 
              src='https://otvet.imgsmail.ru/download/279589980_7c009a289980f21170dcb01a52fe705b_800.jpg'
            />
            <img 
              className={classes.image2} 
              src='https://i.pinimg.com/736x/a1/cc/1e/a1cc1e067a021294efd9362cd72679b1.jpg'
            />
            <img 
              className={classes.image3} 
              src='https://koni-relax.ru/upload/iblock/bd1/fafj2m7diwdpf201v0jxgkpycqtl9632.jpg'
            />
          </div>
        </div>
  )
}

export default CirclcesAndImages