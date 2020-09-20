import React, { useContext, useState, useEffect } from "react";
import styles from "../components/base.module.scss";
import LoginContext from "../context/loginContext";
import {Route,Switch} from "react-router-dom";
import HandleDetailProduct from "./HandleDetailProduct";
import LoadingComponent from "./LoadingComponent";
import Card from "./Card";
import DetailProduct from "./DetailProduct";
import HomeAppliance from "./HomeAppliance";



export default function ProductsComponent({ Items }) {
  const {category,product} = useContext(LoginContext);
  // const [items, setItems] = useState();
  // useEffect(() => {
  //   if (Link) {
  //     console.log(Link);
  //     fetch(Link)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setItems(data);
  //       });
  //   }
  // }, [Link]);

  return (
    <div>
      <Card Items={Items} />
    </div>
  );
}
