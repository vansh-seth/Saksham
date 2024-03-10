//Signin.jsx
import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import Navbar from './Navbar';
import axios from "axios"
import "./Signin.css";
export const Signin = () => {

  const history=useNavigate();

  const[id,setid]=useState('')
  const[password,setpassword]=useState('')

  
async function submit(e) {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:3001/", {
      id: id,
      password: password
    });

    if (response.data === "exist") {
      history("", { state: { id: id } });
    } else if (response.data === "notexist") {
      alert(" invalid  id or password ");
    }
  } catch (error) {
    alert("Wrong details");
    console.error(error);
  }
}

  return (
    <>
    <Navbar/>
    <div className="Bb">


           <div className="L" style={{backgroundColor:"transparent"}}>
            <br/> <br/> <br/>
            <logi style={{backgroundColor:"transparent"}}>
            <pp style={{backgroundColor:"transparent"}}>Specially abled</pp>
            <br/><br/>
            <l style={{backgroundColor:"transparent"}}>A site meant to help people in need</l>
            </logi>
           

          
           
           </div>



           <div className="R">
            <le style={{backgroundColor:"transparent"}}>Login</le><br/><br/><br/>
             <div className="inputs">
               <input type="number" placeholder="ID"  onChange={(e)=>{setid(e.target.value)}} name="" id="" style={{backgroundColor:"transparent"}}/>
               <br /><br/>
               <input type="password" placeholder="Password"  onChange={(e)=>{setpassword(e.target.value)}} name="" id="" style={{backgroundColor:"transparent"}}/>
               <br /><br/> <br/>
        
   

               <button><Link to="" style={{ textDecoration: "none", color:"White", backgroundColor:"transparent"}} onClick={submit} > Login </Link></button>

             </div>
             <br />
             <p style={{backgroundColor:"transparent"}}>
             &nbsp;&nbsp;&nbsp;Don't have an account? <Link to="/Signup" style={{ textDecoration: "none" ,color:"Pink", backgroundColor:"transparent" }}>Create your account</Link>
             </p>
           
           </div>
         </div>
        
         
   </>
  )
}
export default Signin;