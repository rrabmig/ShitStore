import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ProductList from '../ProductList/ProductList'
import { useEffect, useState } from 'react';
import classes from './ProductsAnsSearch.module.css'

const ProductsAndSearch = ({Items}) => {
    const [products, setProducts] = useState(Items)
    const [sort, setSort] = useState('default')
    const [search, setSearch] = useState('')

    useEffect( () => {
      setProducts(Items)
      sorter()
    },[Items])
    useEffect(sorter,[sort])
  
    function searchClickHandler () {
      if (search != '') {
        setProducts(Items.filter(item => item.name.toLowerCase().includes(search)))
      } else {
        setProducts(Items)
      }
      if (sort != 'default') {
        sorter()
      }
      
    }
  
    function sorter() {
      switch (sort) {
        case 'name up':
          setProducts(products.sort((a, b) => a.name - b.name))
          break
        case 'name down':
          setProducts(products.sort((a, b) => b.name - a.name))
          break
  
        case 'count up':
          setProducts(products.sort((a, b) => a.count - b.count))
          break
        case 'count down':
          setProducts(products.sort((a, b) => b.count - a.count))
          break
  
        case 'price up':
          setProducts(products.sort((a, b) => b.price - a.price))
          break
        case 'price down':
          setProducts(products.sort((a, b) => a.price - b.price))
          break
  
        default:
          searchClickHandler()
      }
      
    }
    
  return (
    <div className={classes.productsAndSearch}>
        <SearchBar 
        setSearch={setSearch} 
        setSort={setSort} 
        searchClickHandler={searchClickHandler}
      />
      <ProductList products={products}/>
    </div>
  )
}

export default ProductsAndSearch