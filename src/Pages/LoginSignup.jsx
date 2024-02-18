import React from 'react'
import './CSS/LoginSignup.css'
import { useState } from 'react'
const  LoginSignup=()=>{
  const[state,setState]=useState("Login");
  const[formData,setFormData]=useState({
     username:"",
     password:"",
     email:""
  })
  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login=async()=>{
    console.log("login function executed",formData)
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':"application/json",
      },
      body:JSON.stringify({
        email:formData.email,
        password:formData.password
      }) 
    }).then((response)=>response.json()).then((data)=>responseData=data)
     if(responseData.success)
      {
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }
      else{
        alert(responseData.errors);
      }
    
  }
  const signup=async()=>{
  console.log("signup executed",formData)
  let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':"application/json",
      },
      body:JSON.stringify({
        username:formData.username,
        email:formData.email,
        password:formData.password
      }) 
    }).then((response)=>response.json()).then((data)=>responseData=data)
     if(responseData.success)
      {
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/");
      }
      else{
        alert(responseData.errors);
      }
  }
  
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==='Sign Up'?<input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="your name.." />:<></>}
          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address..." />
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
        </div>
        <button onClick={()=>{state==='Login'?login():signup()}}>Continue</button>
        {state==='Sign Up'?<p className="loginsignup-login">Already have an account <span style={{cursor:"pointer"}} onClick={()=>{setState('Login')}}>Login here</span></p>:<></>}
        {state==='Login'?<p className="loginsignup-login">Create an account?<span style={{cursor:"pointer"}} onClick={()=>{setState("Sign Up")}}> Click Here</span></p>:<></>}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing , i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup