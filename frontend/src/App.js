import React from "react";
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import Module from './App.module.css'
import Dashboard from "./pages/Dahsboard";
import Login from "./pages/Login";
import Header from "./components/Header"
import Register from "./pages/Register";
import EditGoal from "./components/EditGoal";

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
            <Route path="/edit-goal/:id" element={<EditGoal/>}/>
            <Route path="*" element={<Dashboard/>}/>
          </Routes>
        </div>
      </BrowserRouter> 
      <ToastContainer/>
    </React.Fragment>
  );
}

export default App;
