import './App.css';
import { HomePage } from './components/Pages/HomePage/HomePage';
import StorePage from './components/Pages/StorePage/StorePage';
import ProductsAndSearch from './components/ProductsAndSearch/ProductsAndSearch';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { TeamPage } from './components/Pages/Teampage/TeamPage';
import AboutPage from './components/Pages/AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/store' element={<StorePage/>}/>
        <Route path='/team' element={<TeamPage/>} />
        <Route path='/about' element={<AboutPage/>} />
      </Routes>
    </div>
  )
}

export default App;
