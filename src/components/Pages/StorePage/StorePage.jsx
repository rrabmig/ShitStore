import React, { useEffect, useState } from 'react'
import Items from './../../../data/Items'
import ProductsAndSearch from '../../ProductsAndSearch/ProductsAndSearch'
import classes from './StorePage.module.css'
import { Link } from 'react-router-dom'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const StorePage = () => {

    const [category, setCaegory] = useState('Juices')
    const [productList, setproductlist] = useState(Items.juices)

    useEffect (()=>{
        switch (category) {
            case 'navoz':
                setproductlist(Items.navoz)
                break
            case 'juices':
                setproductlist(Items.juices)
                break
            case 'ecofood':
                setproductlist(Items.ecofood)
                break
            case 'food':
                setproductlist(Items.food)
                break
            default:
                setproductlist(Items.navoz)
            
        }
    },[category])
    

  return (
    <div className={classes.StorePage}>
      <Header/>
      <div className={classes.content}>
        <nav className={classes.navList}>
            Категории товаров
            <hr></hr>
            <ul className={classes.categoriesList}>
              <li key='navoz' onClick={()=>setCaegory('navoz')}> Навозы </li>
              <li key='juices' onClick={()=>setCaegory('juices')}> Соки </li>
              <li key='ecofood' onClick={()=>setCaegory('ecofood')}> Eco-friendly еда</li>
              <li key='ecofood' onClick={()=>setCaegory('food')}> Готовые блюда </li>
            </ul>
          </nav>
          <ProductsAndSearch Items={productList}/>
      </div>
      <Footer/>
    </div>
        
  )
}

export default StorePage