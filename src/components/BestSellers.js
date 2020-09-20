import React,{useContext} from "react";
import LoginContext from "../context/loginContext";


export default function BestSellers() {
    const{topProductsList}=useContext(LoginContext);
  return (
    <div>
        <h1>پر فروشترین ها</h1>
        <div className="BestSellersTitle-underLine"></div>
        <div className="BestSellers-Items">
     {topProductsList !== null ? topProductsList.map(top=>(
         <div className="BestSellers-title"> 
         <div className="BestSellers-container">
         <article class="BestSellers-item">
           <img src={top.image} alt="image" className="BestSellersImage"/>
           <div class="img-text">
             <h1>{top.product.substring(0,15)}</h1>
             <h6>{top.price}</h6>
           </div>
         </article>
         </div>
         </div>
     )) 
      :
      <div className="Loading">
      </div>}
      </div>
    </div>
  );
}
