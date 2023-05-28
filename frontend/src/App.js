import React from "react";
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import Module from './App.module.css'
import Dashboard from "./pages/dahsboard";
import Login from "./pages/login";
import Header from "./components/Header"
import Register from "./pages/register";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className={Module.container}>
          <Header/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </div>
      </BrowserRouter> 
    </React.Fragment>
  );
}

export default App;
