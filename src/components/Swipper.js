import React,{useContext,useState,useEffect} from 'react';
import LoginContext from "../context/loginContext";

export default function Swipper() {
  const{amazingList}=useContext(LoginContext);
  const [AmazingList, setAmazingList] = useState([]);
  const [AmazingTitleList, setAmazingTitleList] = useState([]);
  const [AmazingPriceList, setAmazingPriceList] = useState([]);
  useEffect(() => {
    async function amazingArrays(){
      const AmazingList = await amazingList.map(item=>(
        item.image
      ))
      const AmazingTitleList = await amazingList.map(item=>(
        item.product
      ))
      const AmazingPriceList = await amazingList.map(item=>(
        item.price
      ))
      setAmazingList(AmazingList);
      setAmazingTitleList(AmazingTitleList);
      setAmazingPriceList(AmazingPriceList);
    } 
    amazingArrays(); 
  }, [amazingList])
  return (
    AmazingList.length >0 ? (<div>
      <div className="swipper-title">
        <h1>کالاهای شگفت انگیز</h1>
        <div className="swipperTitle-underLine"></div>
      </div>
      <div className="swipper-container">
      <article class="swipper-item swipper-item-black">
      <div class="front-img">
          <img src={AmazingList[0]}/>
        </div>
        <div class="back-text">
          <p>product: {AmazingTitleList[0]}</p>
          <p>price: {AmazingPriceList[0]}</p>
          <button type="button">Read More</button>
        </div>
      </article>
      <article class="swipper-item swipper-item-white">
      <div class="front-img">
          <img src={AmazingList[1]}/>
        </div>
        <div class="back-text">
          <p>product: {AmazingTitleList[1]}</p>
          <p>price: {AmazingPriceList[1]}</p>
          <button type="button">Read More</button>
        </div>
      </article>
      <article class="swipper-item swipper-item-white">
      <div class="front-img">
          <img src={AmazingList[2]}/>
        </div>
        <div class="back-text">
          <p>product: {AmazingTitleList[2]}</p>
          <p>price: {AmazingPriceList[2]}</p>
          <button type="button">Read More</button>
        </div>
      </article>
      <article class="swipper-item swipper-item-black">
        <div class="front-img">
          <img src={AmazingList[3]}/>
        </div>
        <div class="back-text">
           <p>product: {AmazingTitleList[3]}</p>
          <p>price: {AmazingPriceList[3]}</p>
          <button type="button">Read More</button>
        </div>
      </article>
      </div>
    </div>):
    <div></div>
  )
}
