import React, { useEffect, useState } from 'react'
import axios from 'axios' 


export const Register = () => {
  
  const[name,setname] = useState("")
  const [password,setpassword] = useState("")

  
  async function handlesubmit(e){
    e.preventDefault()
    // console.log(name,password)
    
    await axios.post(
      "http://localhost:3000/data",
      {name,password},
    
    ) 

      
     
        
      }
      
  


  return (
    <>
    
     <h1> Register Page </h1>

     <div>
          
         <input 
         type="text" 
         placeholder='Enter your name' 
         value={name}
         onChange={(e)=>{
           setname(e.target.value)
         }}
         autoFocus/>
        <br />
        <br />
         <input 
         type='text' 
         placeholder='Password'
         value={password}
         onChange={(e)=>{
          setpassword(e.target.value)
         }}/>

         <br />
         <br />

         <button onClick={handlesubmit}>Submit</button>

     </div>
    
    </>
  )
}
