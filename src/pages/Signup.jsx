//Signup.jsx
import React, { useState } from 'react'
import Navbar from './Navbar';
import './Signup.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { BsTransparency } from 'react-icons/bs';


export const Signup = () => {
  const history=useNavigate();
  const [input, setInput] = useState({
    name: '',
    password: '',
    repass: '',
    phone: '',
    location: '',
    id: '',
    photo: '', // Default value for the "Type" select
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  function handleClick(event) {
    event.preventDefault();
    const newSchema = {
      name: input.name,
      password: input.password,
      repass: input.repass,
      phone: input.phone,
      location: input.location,
      id: input.id,
      photo: input.photo,
      type: input.type,
    };
  
    axios
      .post('http://localhost:3001/Signup', newSchema)
      .then(res => {
        if (res.data === "exist") {
          alert("User already exists");
        } else if (res.data === "notexist") {
          history("/helpline", { state: { id: newSchema.id } });
        }
      })
      // .catch(e => {
      //   alert("Wrong details");
      //   console.log(e);
      // });
  }
  return (
    <>
    <Navbar/>
    
    <div className="box">
    <div className="noi">
    <soi>Saksham </soi>
    {/* <toi>360</toi> */}
    <br/><br/>
<coo >Be a part of greater<br/></coo>
<poo>good</poo>

    </div>
    <div className="koi">
      <div className="woi">
      Signup
      </div>
     
      <br/>
      <div className="input">
        <input type="text" placeholder="Name" onChange={handleChange} name="name" value={input.name}/><br/>
        <input type="password" placeholder="Password" onChange={handleChange} name="password" value={input.password}/><br/>
        <input type="password" placeholder=" Re-enter Password" onChange={handleChange} name="repass" value={input.repass}/><br/>
        <input type="number" placeholder="Mobile number" onChange={handleChange} name="phone" value={input.phone}/><br/>
        <input type="text" placeholder="Location" onChange={handleChange} name="location" value={input.location}/><br/>
      </div>
      <div className="R">
      <button2 onClick={handleClick} type="submit" id="submitDetails" name="submitDetails" value="Submit"><Link to="/" style={{ textDecoration: "none", color:"White",backgroundColor: "Transparent" }} >Sign-up</Link></button2>

        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />


      </div>
    </div>
    </div>
    



    </>
  );
};
export default Signup;