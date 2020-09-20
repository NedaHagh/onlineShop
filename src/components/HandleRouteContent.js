import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "../components/routes/PrivateRoute";
import LoginContext from "../context/loginContext";
import Content from "./Content";
import Login from "./Login";
import SignUp from "./SignUp";
export default function HandleRouteContent() {
  return (
    <div>
      <Content/>     
        </div>
  );
}
