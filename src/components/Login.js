import React, { useState, useReducer, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import PrivateRoute from "../components/routes/PrivateRoute";
import { Container, Form, Input, Button } from "./AuthFormStyle";
import LoginContext from "../context/loginContext";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { Navbar, NavbarLink } from "styled-navbar-component";
import { Nav } from "styled-nav-component";
import Cards from "../components/Cards";
import logo from "../assets/images/android-chrome-192x192.png";
import loginIcon from "../assets/images/loginIcon.png";
import styles from "./base.module.scss";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, state } = useContext(LoginContext);
  let history = useHistory();
  useEffect(() => {
    let token = localStorage.getItem("token");
    let username = localStorage.getItem("username");
    if (token) {
      dispatch({ type: "LOGEDIN", payload: token, username: username });
    }
  }, []);

  const handleLogOut = () => {
    dispatch({ type: "LOGEDOUT" });
    localStorage.removeItem("token");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://5.9.249.45:8000/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: userName, password: password }),
    })
      .then((res) => {
        if (res.status === 400) {
          setUserName("");
          setPassword("");
        }
        return res.json();
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", userName);
          dispatch({
            type: "LOGEDIN",
            payload: data.token,
            username: userName,
          });
          // const { from } = location.state || { from: { pathname: '/' } }
          history.push('/');      
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className={styles.loginLogo}>
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <Container>
        <div className={styles.loginTitle}>ورود به سایت</div>
        <Form onSubmit={handleSubmit}>
          <div className={styles.loginBoxTitle}>کد کاربری :</div>
          <Input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className={styles.loginBoxTitle}>کلمه عبور :</div>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className={styles.btnLogin}>
            <img src={loginIcon} />
            ورود
          </Button>
        </Form>
        <div className={styles.account_box_footer}>
          کاربر جدید هستید؟{" "}
          <Link to="/signup" className={styles.signUpStyle}>
            ثبت نام در سایت
          </Link>
        </div>
      </Container>
      <footer className={styles.footer_light}>
        <div className={styles.footer_content}>
          <ul>
            <li><Link to="">درباره ندا سایت</Link></li>
            <li><Link to="">فرصت های شغلی</Link></li>
            <li><Link to="">تماس با ما</Link></li>
            <li><Link to="">همکاری با سازمان ها</Link></li>
          </ul>
            <p className={styles.footer_light_text}>استفاده از مطالب فروشگاه اینترنتی دیجی‌کالا فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به شرکت ندا سایت می‌باشد.</p>
        </div>
      </footer>
        <PrivateRoute path="/cards" exact strict
          render={() => (
            <Cards url="http://5.9.249.45:8000/finance/MyShoppingCart/" />
          )}
        />
      </div>
  );
}
