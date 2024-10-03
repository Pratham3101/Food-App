import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Placeoredr from './Pages/Placeorder/Placeoredr';
import Footer from './Components/Footer/Footer';
import Loginpopup from './Components/LoginPopup/Loginpopup';

const App = () => {
  const[showLogin,setShowLogin]=useState(false)

  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
      <div className='App'> 
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Placeoredr/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App;
