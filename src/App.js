import './App.css';
import { HomePage } from './components/Pages/HomePage/HomePage';
import StorePage from './components/Pages/StorePage/StorePage';
import ProductsAndSearch from './components/ProductsAndSearch/ProductsAndSearch';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/store' element={<StorePage/>}/>
      </Routes>
    </div>
  )
}

export default App;
