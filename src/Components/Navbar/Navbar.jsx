import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Storecontext } from '../../Context/Storecontext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(Storecontext);

  return (
    <div className='navbar'>
      <Link to="/"><img src='../assets/logo.png' className='logo' alt='Logo' /></Link>      

      <ul className='navbar-menu'>
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</a>
      </ul>

      <div className="navbar-right">
        <img src='../assets/search_icon.png' alt='Search Icon'/>
        <div className='navbar-search-icon'>
          <Link to="/cart"><img src='../assets/basket_icon.png' alt='Cart Icon'/></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar;





