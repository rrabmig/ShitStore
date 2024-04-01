import React, { useEffect, useState } from 'react'
import Items from './../../../data/Items'
import ProductsAndSearch from '../../ProductsAndSearch/ProductsAndSearch'
import classes from './StorePage.module.css'
import { Link } from 'react-router-dom'

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
            default:
                setproductlist(Items.navoz)
            
        }
    },[category])
    

  return (
    <div className={classes.StorePage}>
        <nav className={classes.navList}>
        <Link to='/'>
          <img 
              className={classes.logo}
              src={require('./../../../images/LLWAbt6jKN0.jpg')}
              alt='logo'
          />
        </Link>
        
          Категории товаров
          <hr></hr>
          <ul className={classes.categoriesList}>
            <li key='navoz' onClick={()=>setCaegory('navoz')}> Навозы </li>
            <li key='juices' onClick={()=>setCaegory('juices')}> Соки </li>
            <li key='ecofood' onClick={()=>setCaegory('ecofood')}> Eco-friendly еда</li>
          </ul>
        </nav>
        <ProductsAndSearch Items={productList}/>
    </div>
  )
}

export default StorePage