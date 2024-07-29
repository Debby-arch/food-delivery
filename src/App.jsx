// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Placeorder from './pages/placeorder/Placeorder';
import Cart from './pages/cart/Cart';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home'
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </> 
  )
}

export default App
