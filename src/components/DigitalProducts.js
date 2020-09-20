import React,{useContext,useState,useEffect} from 'react';
import HandleProductsComponent from "./HandleProductsComponent";
import LoadingComponent from "./LoadingComponent";
import Sidebar from "./Sidebar";
import LoginContext from "../context/loginContext";

export default function DigitalProducts({Items}) {
  console.log(Items);
    const [link, setLink] = useState("");
    const [DigitalItems, setDigitalItems] = useState([]);
    useEffect(() => {
      if(Items != null){
        var DigitalProductsItems = Items["Digital_Products"].map((item) =>
          Object.values(item)
        );
        setDigitalItems(DigitalProductsItems);
      }
      setLink(DigitalProductsItems[0][0]);
    }, [])
  return (
    link !== "" ? (<div className="row_homeappliance">
          <div className="col-3">
            <aside>
              <Sidebar Items={DigitalItems} CategoryItems={Items["Digital_Products"]} clickHandle={(category)=>setLink(category)}/>
            </aside>
          </div>
          <div className="col-9">          
            <HandleProductsComponent Items={Items} Link={link}/>
          </div>
    </div>):
    <LoadingComponent/>
  );
}
