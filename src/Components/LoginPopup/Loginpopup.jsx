import React, { useState } from 'react'
import'./Loginpopup.css';
import { assets } from '../../assets/assets';
const Loginpopup = ({setShowLogin}) => {

    const[currentState,setCurrentState]=useState("Login")
  return (    
    <div className='login-popup'>
       <form className="login-popup-container">
        <div className='login-popup-title'>
            <h2 >{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>
        </div>
         <div className='login-popup-input'>
            {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
            <input type='email' placeholder='Your Email' required/>
            <input type='password' placeholder='password' required/>
         </div>
         <button >{currentState==="Sign Up"?"Create Account":"Login"}</button>
         <div className='login-popup-conditon'>
            <input type='checkbox' required/>
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
         </div>
         {currentState==="Login"
         ?<p> Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
         :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>
        }
       </form>
    </div>
  )
}
export default Loginpopup;
