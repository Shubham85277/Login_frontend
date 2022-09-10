import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target; // THis will take out name and value from e.target
    setUser({
      ...user, //isse jisme input bhroge vhi chnage hota dikhega baaki as it as rhenge ise spread krna kehte h by 3 dots...
      [name]: value,
    });
  };
  
  const login = ({setLoginUser}) => {
    axios
      .post("http://localhost:9000/login", user)
      .then((res) => {alert(res.data.message)
     
      });
  };
  return (
    <div className="Login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter Your email"
      ></input>
      <br />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter Your Password"
      ></input>
      <br />
      <br />
      <button onClick={login}>Login</button>
      or
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
};

export default Login;
