import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import loginContext from "../context/loginContext";
import NoImage from "../assets/images/noPicture.jpg";
import LoadingComponent from "./LoadingComponent";
import ProductFeatures from "./ProductFeatures";

export default function DetailProduct({ product }) {
  const { handleFilter,data } = useContext(loginContext);
  const [item, setItem] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (product.detail) {
      fetch(product.detail)
        .then((response) => response.json())
        .then((data) => {
          setItem(data);
        });
    }
  }, [product.detail]);
  return (
    <div className="Detail-products">
      {item ? (
        <div className="inside-detail-product">
          <div>
            <div>
              <img src={item.image ? item.image : <noPicture />} />
            </div>
            <div></div>
          </div>
          <div>
            <div>{item.name.substring(0, 27)}</div>
            <div className="productDetail">
              <span>brand: <span className="dynamicDetail">{item.brand}</span></span>
              <span>category: <span className="dynamicDetail">{item.category}</span></span> 
            </div>
            <div className="productFeatures">
              <h3>Prouct Features</h3>
                <ProductFeatures/>
            </div>
          </div>          
        </div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}
