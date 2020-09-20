import React, { useContext } from "react";
import LoadingComponent from "./LoadingComponent";
import DetailProduct from "./DetailProduct";
import LoginContext from "../context/loginContext";
import { Route } from "react-router-dom";

export default function HandleDetailProduct({ Items }) {
  const { category,product } = useContext(LoginContext);
  return (
    <div>
      <Route path={`/${category}/${product}`} exact>
        <DetailProduct data={product} />
      </Route>
    </div>
  );
}
