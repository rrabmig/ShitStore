import React from 'react'
import ItemCard from '../ItemCard/ItemCard'

const ProductList = ({products}) => {
  
  return (
    <div className='ProductList'>
        {products.length == 0
        ? <div>Товаров с таким названием нет</div>
        : products.map(product => <ItemCard Item={product}/>)
        }   
    </div>
  )
}

export default ProductList