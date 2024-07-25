import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Placeorder from './pages/placeorder/Placeorder';
import Cart from './pages/cart/Cart';
import Footer from './components/Footer/Footer';
import Home from './pages/home/home';


const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
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
