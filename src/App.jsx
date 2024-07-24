import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import home from './pages/home/home';
import cart from './pages/cart/cart';
import placeorder from './pages/placeorder/placeorder';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<home/>}/>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/order' element={<placeorder/>}/>
      </Routes>
    </div>
  )
}

export default App
