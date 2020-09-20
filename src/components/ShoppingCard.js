import React, { useState, useContext, useEffect } from "react";
import LoginContext from "../context/loginContext";
import { MdDelete } from "react-icons/md";
import NoImage from "../assets/images/noPicture.jpg";
import {Link} from "react-router-dom";

export default function ShoppingCard({bascketItems}) {
  const{handleBascketItems}=useContext(LoginContext);
  const handleClick =(id)=>{
    const newBascketItems = bascketItems.filter(item=>(
        item.id != id 
      )) 
      handleBascketItems(newBascketItems);  
    }
  return (
    bascketItems ? <div className="bascketBodyStyle">
      <p>{bascketItems.length} item(s)</p>
      {bascketItems.map((item) => (
        <div key={item.id}>
          <div className="firstRowBascket">
            <img src={item.image ? item.image :<NoImage/>}/>
            <p>{item.name.substring(0, 27)}</p>
          </div>
          <div className="secondRowBascket">
            <p>{item.number}</p>
            <a><MdDelete className="deleteIcon" onClick={()=>handleClick((item.id))}/></a>
          </div>
          <hr />
        </div>
      ))}
      <Link to="/card" onClick={()=>console.log(bascketItems)}><button>View shopping cart</button></Link>
    </div>: null)
}
