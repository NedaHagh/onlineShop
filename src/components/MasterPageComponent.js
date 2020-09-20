import React, { useContext } from "react";
import LoginContext from "../context/loginContext";
import Content from "./Content";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomeAppliance from "./HomeAppliance";
import DigitalProducts from "./DigitalProducts";
import Educational from "./Educational";
import DetailProduct from "./DetailProduct";
import { Route, Switch } from "react-router-dom";
import styles from "../components/base.module.scss";
import HandleDetailProduct from "./HandleDetailProduct";

export default function MasterPageComponent() {
  const { data, category, product } = useContext(LoginContext);
  return (
    <div className="container-fluid">
      <Navbar />
      <div className={styles.content}>
        <Switch>
          <Route path="/" exact strict>
            <Content />
          </Route>
          <Route path="/Refrigerator" exact srtict>
            <HomeAppliance Items={data[0]} />
          </Route>
          <Route path="/TV" exact srtict>
            <HomeAppliance Items={data[0]} />
          </Route>
          <Route path="/Laptob" exact srtict>
            <DigitalProducts Items={data[1]} />
          </Route>
          <Route path="/Mobile" exact srtict>
            <DigitalProducts Items={data[1]} />
          </Route>
          <Route path="/Book" exact srtict>
            <Educational Items={data[2]} />
          </Route>
          <Route path="/Stationery" exact srtict>
            <Educational Items={data[2]} />
          </Route>
          <Route path={`/${category}/${product.name}`} exact>
            <DetailProduct product={product} />
          </Route>
        </Switch>
      </div>
      {/* <div className="c-footer">
        <Footer />
      </div> */}
    </div>
  );
}
