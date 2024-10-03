import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo}/>
                <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, cum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio aspernatur reprehenderit ipsa consequatur dolorum cupiditate aliquam.</p>
                <div className='footer-social-icon'>
                    <img src={assets.facebook_icon}/>
                    <img src={assets.twitter_icon}/>
                    <img src={assets.linkedin_icon}/>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>Get in touch</h2>
                <ul>
                    <li>1800-454-4545</li>
                    <li>abc@gmail.com</li>
                </ul>
            </div>
        </div>
          <hr/>
          <p className='footer-copyright'>Copyright 2024 &copy; ABC.com - All Right-Reserved.</p>
    </div>
  )
}

export default Footer;
