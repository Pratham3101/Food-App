import React from 'react'
import'./Exploremenu.css';
import {menu_list} from "../../assets/assets.js";
const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore_menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium delectus sapiente nam excepturi. Ducimus iste fugit earum. Qui, a.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
                      <img className={category===item.menu_name?"active":""} src={item.menu_image}></img>
                      <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default Exploremenu;
