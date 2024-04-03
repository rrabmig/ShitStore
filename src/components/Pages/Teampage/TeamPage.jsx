import React from 'react'
import Header from '../../Header/Header'
import Footer from './../../Footer/Footer'
import classes from './teamPage.module.css'

export const TeamPage = () => {
  return (
    <div className={classes.teamPage}>
      <Header/>
      <div className={classes.content}>
        <div className={classes.intro}>
          <h1>Мы - специалисты по навозу</h1>
          <img
            alt = 'Фермеры'
            src = '/photosForHistory/farmers.jpg'
            className={classes.fermersPhoto}
          />
        </div>
        <div className={classes.article}>
          <div className={classes.half} style={{fontSize:'20px', display:'flex',alignItems:'center',justifyContent:'center'}}>
            <p>Команда по переработке вторсырья в нашей компании состоит из опытных специалистов, которые имеют глубокие знания в области переработки отходов и создания экологически чистой продукции. Они тщательно отбирают и обрабатывают материалы для производства куриного сока и мусорного сока, соблюдая самые современные технологии и стандарты качества.</p>
          </div>
          <div className={classes.half}>
            <div className={classes.card}>
              <img
                alt='тетя'
                className={classes.empPhoto}
                src='/photosForHistory/female1.jpg'
              />
              <h3>Анфиса Козлова</h3>
              <p>Генеральный директор отдела продаж нажора. Стаж работы в компании - 20 лет.</p>
              <p><i>-"Я не могу преставить день, когда я не продала бы экологически чистый нажор"</i></p>
            </div>
          </div>
        </div>
        <div className={classes.article}>
          <div className={classes.half} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <p style={{fontSize:'20px'}}>Продукция "наЖор" производится с применением инновационных методов переработки, что позволяет сделать наши напитки максимально полезными для потребителя и безопасными для окружающей среды. Мы следим за тем, чтобы весь процесс производства был энергоэффективным и экологически безопасным.</p>
          </div>
          <div className={classes.half}>
            <div className={classes.card}>
              <img                  alt='тетя'
                className={classes.empPhoto}
                src='/photosForHistory/male1.jpg'
              />
              <h3>Николас Федоров</h3>
              <p>Профессиональный выдавливатель мусорного сока. Натстоящий виртуоз своего дела.</p>
              <p><i>-"Мир, труд, куриный сок. Пью за ваше здоровье!"</i></p>          
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
