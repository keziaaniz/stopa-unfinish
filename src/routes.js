import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from './App';
import Home from "./Pages/index-2/Index-2";
import Login from "./Pages/login/Login";

const Router = () => {
   return(

       <BrowserRouter>
        <Routes>
           <Route component = { <App/> }  path="/" />
           <Route component = { <Home/> }  path="/Home" />
           <Route component = { <Login/> }  path="/login" />
        </Routes>
       </BrowserRouter>
   )
}

export default Router;