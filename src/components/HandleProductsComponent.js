import React,{useEffect,useState,useContext} from 'react';
import ProductsComponent from "./ProductsComponent";
import LoadingComponent from "./LoadingComponent"; 
import LoginContext from "../context/loginContext";
import DetailProduct from "./DetailProduct";
import {Route} from "react-router-dom";


export default function HandleProductsComponent(props) {
  const {category} = useContext(LoginContext);
    const [items, setItems] = useState();
  useEffect(() => {
    if (props.Link) {
      fetch(props.Link)
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
        });
    }
  }, [props.Link]);
    return (
        <div>
          {items ?<ProductsComponent Items={items}/> :<LoadingComponent/>}
          {items? items.map((item,index)=>(
        <Route path={`/${category}/${item.name}`} key={index} exact>       
          <DetailProduct  data = {item}/>
        </Route>
        )):<LoadingComponent/>}
        </div>
    )
}
