import React, { useContext, useState, useEffect,useRef } from "react";
import styles from "./base.module.scss";
import { Navbar as nav, NavbarLink } from 'styled-navbar-component';
import style from "../App.css";
import LoginContext from "../context/loginContext";
import logo from "../assets/images/android-chrome-192x192.png";
import bascket from "../assets/images/bascket-1.png";
import loginIcon from "../assets/images/login-icon.png";
import categoryIcon from "../assets/images/categoryIcon.png";
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import SearchComponent from "./searchComponent";
import Login from "./Login";
import SignUp from "./SignUp";
import ShoppingCard from "./ShoppingCard";
import {ShowNumber} from "../StyledComponent";


export default function Navbar() {
  const{handleCardModal,cardModal,bascketItems}=useContext(LoginContext);
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("mouseenter",() => handleCardModal(true));
      ref.current.addEventListener("mouseleave",() => handleCardModal(false));
    }
  }, [,cardModal]);

  return (
    <div className={styles.HeaderStyle}>
      <div className={styles.navbar}>
        <div className={styles.navbar_side_right}>
          <div className={styles.logo}>
           <Link to="/"><img src={logo} className={styles.imgLogo}/></Link>
          </div>
          <div className={styles.serachBox}>
            <SearchComponent className={styles.searchStyle} />
          </div>
        </div>
        <div className={styles.navbar_side_left}>
          <div ref={ref}>
  <Link to=""><img src={bascket} className={styles.bascketImage}/><ShowNumber className={styles.showNumber} display={bascketItems.length}>{bascketItems.length}</ShowNumber></Link>
            {bascketItems.length && cardModal ? <ShoppingCard  className="bascketForm" bascketItems={bascketItems}/> :null}
          </div>
          <div className={styles.loginToAccount}>
              <img src={loginIcon} className={styles.loginImg} />
              <Link to="/login">ورود/ ثبت نام</Link>
          </div>
        </div>
      </div>
      <div className={styles.menuLinks}>
      {/* <i className={styles.categoryIcon} className="fa">&#xf0ca;</i> */}
        <img src={categoryIcon} className={styles.categoryIcon}/>
        <a href="#">دسته بندی کالاها</a>
        <a href="#">تخفیف ها و پیشنهادها</a>
        <a href="#">درباره ما</a>
        <a href="#">پشتیبانی و قوانین</a>
        <a href="#">تماس با ما</a>
      </div>
    </div>
  );
}
