import React, { useState } from "react";
import { SignUpContainer, Form, Input, Button } from "./AuthFormStyle";
import { Link, withRouter } from "react-router-dom";
import styles from "./base.module.scss";
import logo from "../assets/images/android-chrome-192x192.png";
import LoginContext from "../context/loginContext";

function SignUp({ history }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://5.9.249.45:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: userName,
        email: email,
        phone: phone,
        password: password,
      })
    })
      .then(res => res.json())
      .then(data => history.push('/login'))
      .catch(err => console.log(err));
  };
  return (
    <div>
      <div className={styles.loginLogo}>
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
    <SignUpContainer className={styles.heightForBox}>
      <Form onSubmit={handleSubmit}>
      <div className={styles.loginBoxTitle}>کد کاربری :</div>
        <Input
          type="text"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <div className={styles.loginBoxTitle}>ایمیل:</div>
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <div className={styles.loginBoxTitle}>تلفن :</div>
        <Input
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <div className={styles.loginBoxTitle}>پسورد :</div>
        <Input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit">ثبت نام</Button>
      </Form>
      <div className={styles.loginButton}>
       <span>آیا عضو سایت هستید؟</span> <Link to="./login">وارد شوید</Link>
      </div>
    </SignUpContainer>
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
      </div>
  );
}

export default withRouter(SignUp)