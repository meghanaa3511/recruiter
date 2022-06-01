import React from "react";
import {ref , set } from 'firebase/database';
import { useState  } from'react';
import '../Authpage/AuthPage.css';
import { async } from '@firebase/util';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {Link, useNavigate} from 'react-router-dom';
import { firebaseAuth } from "../../firebase-handler/firebasehandler";


function Authpage() {
    const [userInput ,setuserInput] = useState({name:"" , emailId:"",password:""})
  
    const nav = useNavigate();
  
    const handleClick=async()=>{

      try{
        
        await createUserWithEmailAndPassword(firebaseAuth, userInput.emailId ,userInput.password);
        alert("acount created")
      }
      catch(err){
        alert(err);
      }
      nav("/upload");
    }
  
    const handleChange =(event) => {
      const {name , value }=event.target;
  
      setuserInput({
        ...userInput,
        [name]:value
      })
    }
    return (
      <div className='App'>
        <input className="inputs" placeholder="Name" name="name" value={userInput.name} onChange={handleChange}/>
        <input className='inputs' placeholder='Email Id' name ='emailId' type={'email'} value = {userInput.emailId} onChange={handleChange}/>
        <input className='inputs' placeholder='Password' name ='password' type={'password'} value = {userInput.password} onChange={handleChange}/>
   <button className='button-block' onClick={handleClick}>Sign Up</button>
      </div>
     
    );
  }
  
  export default Authpage;

