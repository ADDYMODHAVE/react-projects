import React from 'react'
import { NavLink } from 'react-router-dom';
import './Home.css';

 const Home = () => {
  const verifyEmail=async(event)=>{
   event.preventDefault()
   try{
   const res= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCwYMs-t9xN-Hk0q-RPAUaV_iQMTI2IHOA',
   {
    method : "POST",
    headers :{
      'Content-Type' : "application/json"
    },
    body: JSON.stringify({
      requestType:"VERIFY_EMAIL",
      idToken: JSON.parse(localStorage.getItem("idToken")).idToken,
    })
   })
   if(res.ok){
    alert("VERIFICATION MAIL SEND PLS CHEACK YOUR MAIL");
   }
   const data = await res.json();
   console.log(data)
   }
   catch(error){
    console.log(error.message)
   }
  }
  return (
  <>
  <div className='main-home'>
    <h2 className='margin-auto'>Welcome To Expense Tracker</h2>
    <div className='profile'>Your Profile is incomplete <NavLink className="link-profile" to="/update">complete now</NavLink></div>
    </div>
    <div className='verify-email text-center pt-1' ><button style={{"cursor":"pointer" , "color":"blue"}} onClick={verifyEmail}>Verify Email</button></div>
    </>
  )
}

export default Home