import React, { useContext,useEffect,useState } from "react";
import LoginContext from "../context/loginContext";
import { Link,Route } from "react-router-dom";
// import homeCategory1 from "../assets/images/homecategory1.jpg";
// import homeCategory2 from "../assets/images/homeCategory2.jpg";
// import homeCategory3 from "../assets/images/homeCategory3.jpg";

export default function HomeCategory() {
  const { handleFilter } = useContext(LoginContext);
  const handleClick = (categoryItem)=>{
    switch(categoryItem){
      case "HomeAppliance":
        handleFilter("Refrigerator");
        break;
      case "Educational":
        handleFilter("Book");
        break;
      case "DigitalProducts":
        handleFilter("Laptob");
        break;
    } 
  }

  return (
    <div className="homeCategoryContainer">
      <div className="homeCategoryImg1">
        <div className="categoryContent">
          <div className="title">
              <Link to="/Refrigerator" onClick={()=>handleClick("HomeAppliance")}>وسایل خانگی</Link>
            <p>مشاهده</p>
          </div>
        </div>
      </div>
      <div className="homeCategoryImg2">
        <div className="categoryContent">
          <div className="title">
              <Link to="/Book" onClick={()=>handleClick("Educational")}>آموزشی</Link>
            <p>مشاهده</p>
          </div>
        </div>
      </div>
      <div className="homeCategoryImg3">
        <div className="categoryContent">
          <div className="title">
              <Link to="/Laptob" onClick={()=>handleClick("DigitalProducts")}>محصولات دیجیتال</Link>
            <p>مشاهده</p>
          </div>
        </div>
      </div>
    </div>
  );
}
