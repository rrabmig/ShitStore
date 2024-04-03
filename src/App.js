import './App.css';
import { HomePage } from './components/Pages/HomePage/HomePage';
import StorePage from './components/Pages/StorePage/StorePage';
import { Route, Routes } from 'react-router-dom';
import { TeamPage } from './components/Pages/Teampage/TeamPage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import RegistrationPage from './components/Pages/RegistrationPage/RegistrationPage';
import CartPage from './components/Pages/Cartpage/CartPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/store' element={<StorePage/>}/>
        <Route path='/team' element={<TeamPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/registration' element={<RegistrationPage/>} />
        <Route path='/cart' element={<CartPage/>} />
      </Routes>
    </div>
  )
}

export default App;
