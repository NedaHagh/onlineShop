import React, { useContext, useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import HandleProductsComponent from "./HandleProductsComponent";
import styles from "./base.module.scss";
import {Route,Switch} from "react-router-dom";
import LoginContext from "../context/loginContext";

export default function HomeAppliance({Items}) {
  if(Items != null){
        var homeApplianceItems = Items["Home_appliance"].map((item) =>
          Object.values(item)
        );
      }
  const [link, setLink] = useState(homeApplianceItems[0][0]);
  return (
    <div className="row_homeappliance">
          <div className="col-3">
            <aside>
              <Sidebar Items={homeApplianceItems} CategoryItems={Items["Home_appliance"]} clickHandle={(category)=>setLink(category)}/>
            </aside>
          </div>
          <div className="col-9">          
            <HandleProductsComponent Items={Items} Link={link}/>
          </div>
    </div>
  );
}
