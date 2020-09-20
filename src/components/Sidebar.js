import React,{useContext} from "react";
import {Link,NavLink} from "react-router-dom";
import LoginContext from "../context/loginContext";
import styles from "./base.module.scss";
import {MdKeyboardArrowLeft} from "react-icons/md";

export default function Sidebar(props) {
  const{handleFilter}=useContext(LoginContext);
  const handleClick =(category)=>{
    let link="";
    switch(category[0]){
      case "Refrigerator":
        link = props.Items[0][0];
        break;
      case "TV":
        link = props.Items[1][0];
        break;
      case "Laptob":
        link = props.Items[0][0];
        break;
      case "Mobile":
        link = props.Items[1][0];
        break;
      case "Book":
        link = props.Items[0][0];
        break;
      case "Stationery":
        link = props.Items[1][0];
        break;        
    }
    props.clickHandle(link);
    handleFilter(category);
    link="";
  }
  return (
    <div className={styles.c_box}>
      <div className={styles.c_box_header}>دسته بندی ها</div>  
      <div className={styles.c_box_content}>
        <div className={styles.c_box_items}>
          <ul className={styles.catalog_list}>
            {console.log(props.CategoryItems)}
          {props.CategoryItems.map(category=>( 
              <li className={styles.catalog_item} key={Object.keys(category)}>
              <NavLink onClick={()=>handleClick(Object.keys(category))}
              activeStyle={{color:"#00b4d8"}} to={`${Object.keys(category)}`}>
                <MdKeyboardArrowLeft/>
                <span>{Object.keys(category)}</span>
                </NavLink>
            </li>
           )) 
            }
          </ul>
          </div>  
      </div>  
    </div>
  );
}
