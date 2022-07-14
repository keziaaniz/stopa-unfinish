import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Index2 from './Pages/index-2/Index-2';
import Login from './Pages/login/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Index2 />} />
        <Route path="about" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
