import React, { useState } from "react";
import styles from "../components/base.module.scss";
import SlideShow from "./SlideShow";
import HomeCategory from "./HomeCategory";
import Swipper from "./Swipper";
import BestSellers from "./BestSellers";


export default function Content() {
  const [searchValue, setSearchValue] = useState(null);
  const handleSearch = (value) => {
    setSearchValue(value);
  };
  return (
    <div className="container-fluid slideshow">
    <div className="row">
      <div className="col-12">
      <div className="slideShow">
          <SlideShow/>
        </div>
        <div className="row"></div>
        <div className="homeCategory">
        <h1>دسته بندی کالاها</h1>
        <div className="underLineTitle"></div>
          <HomeCategory/>
        </div>
        <div className="swipper">
          <Swipper/>
        </div>
        <div className="porforoshtarinha">
          <BestSellers/>
        </div>
      </div>
    </div>
    </div>
  );
}
