import React, { useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Cards from "./components/Cards";
import CheckItems from "./components/CheckItems";
import Home from "./components/Home";
import ShoppingCard from "./components/ShoppingCard";
import LoginContext from "../src/context/loginContext";
import PrivateRoute from "../src/components/routes/PrivateRoute";
import HandleDetailProduct from "./components/HandleDetailProduct";
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGEDIN":
      return {
        isAuthenticated: true,
        token: action.payload,
        username: action.username,
      };
    case "LOGEDOUT":
      return { isAuthenticated: false, token: "", username: "" };  
    default:
      return state;
  }
};

export default function App() {
  const[data,setData]=useState([]);
  const [link, setLink] = useState("http://5.9.249.45:8000/menu");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [product,setProduct]=useState("");
  const [cardModal,setCardModal]=useState(false);
  const[bascketItems,setBascketItems]=useState([]);
  const[amazingList,setAmazingList]=useState([]);
  const[topProductsList,setTopProductsList]=useState([]);
  const [state, dispatch] = useReducer(reducer, {
    isAuthenticated: false,
    token: null
  });
  useEffect(() =>{
    let token = localStorage.getItem("token");
    let username = localStorage.getItem("username");
    if (token) {
      dispatch({ type: "LOGEDIN", payload: token, username: username });
    }
    if (link) {      
       const fetchApi = async ()=>{
        let response = await fetch(link);
         response =await response.json();
          setData(response);
          setLoading(false);
      }
      fetchApi();
    }
    async function fetchCategory() {
    try {
      const urls = [
        "http://5.9.249.45:8000/new_items",
        "http://5.9.249.45:8000/Amazing_Offers",
        "http://5.9.249.45:8000/Top_Products",
      ];

      const [newItems, amazingOffers, topProducts] = await Promise.all(
        urls.map(async function (url) {
          const response = await fetch(url);
          return response.json();
        })
      );
      setAmazingList([...amazingOffers]);
      console.log(amazingList);
      setTopProductsList([...topProducts]);
      console.log(topProductsList);
    } catch (error) {
      console.log(error);
    }
  }
  fetchCategory();
  }, []);
  const handleFilter = (category) => {
    setCategory(category);
    setLink(`http://5.9.249.45:8000/menu/${category}`);
  };
  const handleProduct = (product)=>{
    setProduct(product);
  }
  const handleCardModal=(modal)=>{
    setCardModal(modal);
  }
  const handleBascketItems =(array)=>{
    setBascketItems(array);
  }
  return (
    <Router>
      <LoginContext.Provider value={{ state, dispatch,data,loading,handleFilter,
        link,category,product,handleProduct,handleCardModal,cardModal
        ,bascketItems,handleBascketItems,amazingList,topProductsList}}>
        <Home/>
        <Route path="/login/" exact srtict
          render={() => (state.isAuthenticatedd ? <CheckItems/> : <Login />)}
        />
        <Route path="/signup/" exact srtict
          render={() => (state.isAuthenticated ? <Login /> : <SignUp />)}
        />
        <Route path="/card">
          <CheckItems/>
        </Route>
        {/* <Route>
          {cardModal ?<ShoppingCard/> : null}
        </Route>         */}
        {/* <PrivateRoute path="/finance" exact strict
          render={() =>(
            <Cards url="http://5.9.249.45:8000/finance/MyShoppingCart/" />
          )}
        /> */}
      </LoginContext.Provider>
    </Router>
  );
}
