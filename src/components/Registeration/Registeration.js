import React, { useState } from "react";
import "./Registeration.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Registeration = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target; // THis will take out name and value from e.target
    setUser({
      ...user, //isse jisme input bhroge vhi chnage hota dikhega baaki as it as rhenge ise spread krna kehte h by 3 dots...
      [name]: value,
    });
  }
   
  const register = () =>{
 const {name,email,password,reEnterPassword}=user;
 if(name && email && password && (password===reEnterPassword)){
  axios.post("http://localhost:9000/register",user)
  .then(res=>alert(res.data.message))
 }
 else{
  alert("Please fill valid details")
 }
  }  

  return (
    <div className="Register">
      <h1>Register</h1>
      <input
        type="text"
        onChange={handleChange}
        name="name"
        value={user.name}
        placeholder="Enter Your Name"
      ></input>
      <br />
      <input
        type="text"
        onChange={handleChange}
        name="email"
        value={user.email}
        placeholder="Enter Your email"
      ></input>
      <br />
      <input
        type="password"
        onChange={handleChange}
        name="password"
        value={user.password}
        placeholder="Enter Your Password"
      ></input>
      <br />
      <input
        type="password"
        onChange={handleChange}
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Your Password"
      ></input>
      <br />
     <button onClick={register} >Register</button>
      or
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
};
export default Registeration;

