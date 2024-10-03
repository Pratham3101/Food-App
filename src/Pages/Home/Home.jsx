import React, { useState } from 'react'
 import './Home.css';
import Header from '../../Components/Header/Header';
import Exploremenu from '../../Components/Explorer Menu/Exploremenu';
import Fooddisplay from '../../Components/Fooddisplay/Fooddisplay';
import Appdownload from '../../Components/App/Appdownload';
const Home = () => {
  
  const [category,setCategory]= useState("All");

  return (
    <div>
       <Header/>
       <Exploremenu category={category} setCategory={setCategory}/>
       <Fooddisplay category={category}/>
       <Appdownload/>
    </div>
  )
}

export default Home
