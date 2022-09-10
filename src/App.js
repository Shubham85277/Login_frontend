import "./App.css";
import React, { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import Registeration from "./components/Registeration/Registeration";
import { BrowserRouter , Route, Routes } from "react-router-dom";

function App() {
  const[user, setLoginUser]=useState({})
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={user && user._id ? <HomePage /> : <Login setLoginUser={setLoginUser}/>} >
          </Route>
          
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />}></Route>
          <Route path="/register" element={<Registeration />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
