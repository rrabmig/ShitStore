import React from 'react'
import classes from './searchBar.module.css'
import SearchButton from '../UI/Buttons/SearchButton/SearchButton'

const SearchBar = ({setSearch, setSort, searchClickHandler}) => {
  return (
    <div className={classes.searchBar}>
        <div className={classes.sort}>
          <img 
            className={classes.filterImg}
            src={require('./filter_767384.png')}
          />
          <select 
            d
            className={classes.select}
            onChange={e => setSort(e.target.value)}
          >
            <option value='default'> Без сортировки</option>
            <option value='price up'> По цене ↑</option>
            <option value='price down'> По цене ↓</option>
            <option value='count up'> По колличеству на складе  ↑</option>
            <option value='count down'> По колличеству на складе ↓</option>
            <option value="name up"> По назваию А-Я</option>
            <option value="name down"> По названиб Я-А</option>
          </select>
        </div>
        
        <div className={classes.search}>
          <input className={classes.searchInput}
            type='search'
            placeholder='Искать в каталоге'
            onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
          />
          <SearchButton onClick={searchClickHandler}/>
        </div>
    </div>
  )
}

export default SearchBar