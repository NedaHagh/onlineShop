import React, { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {CardBtn} from "../StyledComponent";
import LoginContext from "../context/loginContext";

export default function ProductFeatures() {
  const { category, data, product,handleBascketItems,bascketItems} = useContext(LoginContext);
  const [featuresLink, setFeaturesLink] = useState("");
  const [itemDetailLink, setItemDetailLink] = useState("");
  const [itemDetails, setItemDetails] = useState([]);
  const [BascketItems,setBascketItems]= useState([...bascketItems]);
  const [titleOfButton,setTitleOfButton]=useState("Insert To Shopping Card");
  const [styleBtn,setStyleBtn]=useState(true);

  useEffect(() => {
    switch (category) {
      case "Refrigerator":
        setFeaturesLink(Object.values(Object.values(data[0])[0][0])[0]);
        console.log(Object.values(Object.values(data[0])[0][0])[0]);
        
        break;
      case "TV":
        setFeaturesLink(Object.values(Object.values(data[0])[0][1])[0]);
        console.log(Object.values(Object.values(data[0])[0][1])[0]);
        break;
      case "Laptob":
        setFeaturesLink(Object.values(Object.values(data[1])[0][0])[0]);
        console.log(Object.values(Object.values(data[1])[0][0])[0]);
        break;
      case "Mobile":
        setFeaturesLink(Object.values(Object.values(data[1])[0][1])[0]);
        console.log(Object.values(Object.values(data[1])[0][1])[0]);
        break;
      case "Book":
        setFeaturesLink(Object.values(Object.values(data[2])[0][0])[0]);
        break;
      case "Stationery":
        setFeaturesLink(Object.values(Object.values(data[2])[0][1])[0]);
        console.log(Object.values(Object.values(data[2])[0][1])[0]);
        break;
      default:
        break;
    }
  }, []);
  useEffect(() => {
    fetch(featuresLink)
      .then((response) => response.json())
      .then((data) => {
        data.map((item) => {
          if (item.name === product.name) {
            setItemDetailLink(item.detail);
          }
        });
      });
  }, [featuresLink]);

  useEffect(() => {
    fetch(itemDetailLink)
      .then((response) => response.json())
      .then((data) => {
        setItemDetails(data);
      });
  }, [itemDetailLink]);

  const addToCard=(bascketItem)=>{
    setTitleOfButton("Added to Shopping Card!");
    setStyleBtn(false);
    if(BascketItems.length > 0){
     BascketItems.map(item=>
     item.id === bascketItem.id ?
     setBascketItems ([...BascketItems,{...item,number:item.number+1}])
       :
       setBascketItems ([...BascketItems,{...bascketItem,number:1}])
    )}
    else{
     setBascketItems ([...BascketItems,{...bascketItem,number:1}]) 
    } 
    handleBascketItems(BascketItems);
  }

  useEffect(() => {
    const newBascket = bascketItems.filter(item =>item.id === itemDetails.id);
      if(newBascket.length === 0){
        setTitleOfButton("Insert To Shopping Card");
        setStyleBtn(true);
      }
  }, [bascketItems])

  return (
    <div className="features">
       {
      itemDetails ? (
        category === "Refrigerator" ? (
          <div>
            <ul>
            <li>brand:<span>{itemDetails.brand}</span></li>
            <li>created_date:<span>{itemDetails.created_date}</span></li>
            <li>color:<span>{itemDetails.color}</span></li>
            <li>weight:<span>{itemDetails.weight}</span></li>
            <li>voltage:<span>{itemDetails.voltage}</span></li>
            <li>side_by_side:<span>{itemDetails.side_by_side}</span></li>
            <li>top_mount_freezer:<span>{itemDetails.top_mount_freezer}</span></li>
            <li>price:<span>{itemDetails.price}000 T</span></li>
            </ul>
            <Link><span onClick={()=>addToCard(itemDetails)} Style={styleBtn}>{titleOfButton}</span></Link>
          </div>
        ) : category == "TV" ? (
          <div>
            <ul>
            <li>brand:<span>{itemDetails.brand}</span></li>
            <li>created_date:<span>{itemDetails.created_date}</span></li>
            <li>color:<span>{itemDetails.color}</span></li>
            <li>weight:<span>{itemDetails.weight}</span></li>
            <li>resolution:<span>{itemDetails.resolution}</span></li>
            <li>size:<span>{itemDetails.size}</span></li>
            <li>screen_size:<span>{itemDetails.screen_size}</span></li>
            <li>price:<span>{itemDetails.price}000 T</span></li>
            </ul>
        <Link><span onClick={()=>addToCard(itemDetails)} Style={styleBtn}>{titleOfButton}</span></Link>
          </div>
        ) : category == "Laptob" ? (
          <div>
            <ul>
            <li>brand:<span>{itemDetails.brand}</span></li>
            <li>color:<span>{itemDetails.color}</span></li>
            <li>ram_Gig:<span>{itemDetails.ram_Gig}</span></li>
            <li>touch_screen_display:<span>{itemDetails.touch_screen_display}</span></li>
            <li>graphics_card:<span>{itemDetails.graphics_card}</span></li>
            <li>price:<span>{itemDetails.price}000 T</span></li>
            </ul>
            <Link><span onClick={()=>addToCard(itemDetails)} Style={styleBtn}>{titleOfButton}</span></Link>
          </div>
        ) : category == "Mobile" ? (
          <div>
            <ul>
            <li>brand:<span>{itemDetails.brand}</span></li>
            <li>created_date:<span>{itemDetails.created_date}</span></li>
            <li>color:<span>{itemDetails.color}</span></li>
            <li>ram_Gig:<span>{itemDetails.ram_Gig}</span></li>
            <li>operation_system:<span>{itemDetails.operation_system}</span></li>
            <li>display_resolution:<span>{itemDetails.display_resolution}</span></li>
            <li>sim_card:<span>{itemDetails.sim_card}</span></li>
            <li>price:<span>{itemDetails.price}000 T</span></li>
            </ul>
            <Link><span onClick={()=>addToCard(itemDetails)} Style={styleBtn}>{titleOfButton}</span></Link>
          </div>
        ) : category == "Book" ? (
          <div>
            <ul>
            <li>created_date:<span>{itemDetails.created_date}</span></li>
            <li>recommendede_ages:<span>{itemDetails.recommendede_ages}</span></li>
            <li>publisher:<span>{itemDetails.publisher}</span></li>
            <li>language:<span>{itemDetails.language}</span></li>
            <li>price:<span>{itemDetails.price}000 T</span></li>
            </ul>
            <Link><CardBtn onClick={()=>addToCard(itemDetails)} Style={styleBtn}>{titleOfButton}</CardBtn></Link>
          </div>
        ) : category == "Stationery" ? (
          <div>
            <ul>
            <li>brand:<span>{itemDetails.brand}</span></li>
            <li>created_date:<span>{itemDetails.created_date}</span></li>
            <li>recommendede_ages:<span>{itemDetails.recommendede_ages}</span></li>
            <li>color:<span>{itemDetails.color}</span></li>
            <li>kind:<span>{itemDetails.kind}</span></li>
            <li>nib:<span>{itemDetails.nib}</span></li>
            <li>price:<span>{itemDetails.price}000 T</span></li>
            </ul>
            <Link><CardBtn onClick={()=>addToCard(itemDetails)} Style={styleBtn}>{titleOfButton}</CardBtn></Link>
          </div>
        ) : (
          <div>" "</div>
        )
      ) : (
        <div></div>
      )} 
    </div>
  );
}
