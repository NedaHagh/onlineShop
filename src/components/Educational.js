import React,{useState,useEffect,useContext} from 'react';
import HandleProductsComponent from "./HandleProductsComponent";
import Sidebar from "./Sidebar";
import LoginContext from "../context/loginContext";

export default function Educational({Items}) {
    if(Items != null){
        var Educational = Items["Educational"].map((item) =>
          Object.values(item)
        );
      }
  const [link, setLink] = useState(Educational[0][0]);
  console.log(Educational[0][0]);
  return (
    <div className="row_homeappliance">
          <div className="col-3">
            <aside>
              <Sidebar Items={Educational} CategoryItems={Items["Educational"]} clickHandle={(category)=>setLink(category)}/>
            </aside>
          </div>
          <div className="col-9">          
            <HandleProductsComponent Items={Items} Link={link}/>
          </div>
    </div>
  );
}
