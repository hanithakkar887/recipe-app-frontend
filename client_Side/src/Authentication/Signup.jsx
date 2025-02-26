





import  { useEffect, useState } from 'react'
import axios from 'axios';
import '../style/login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export const Signup = () => {
    const [Username , setname]  =  useState('')
    const [email , setemail]  =  useState('')
    const [password , setpassword]  =  useState('')

   const navigate = useNavigate()

async function HandleSubmit(e){
    e.preventDefault();
   
      
    try {
        const  response =  await axios.post('http://localhost:4000/auth/register' , {
            Username,
            email,
            password
        })
        console.log(Username)
        console.log(email)
        console.log(password) 
        setname("")
        setemail("")
        setpassword("")
        navigate('/login')
    } catch (error) {
        console.log(
            "something went wrong "
        )
    }


 }


  return (
    <>  
     <div className='login_body'>
     <div className='container_login'>
     <h2>Signup</h2>
    <form onSubmit={HandleSubmit} className='login-form '>

    <input type="text"
      value={Username}
      onChange={(e)=>setname(e.target.value)}
      placeholder='Enter Username'
      required
       className='INput_My'
       />

<input type="email"
      value={email}
      onChange={(e)=>setemail(e.target.value)}
      placeholder='Enter Email' 
      required
       className='INput_My'
      />

<input type="text"
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      placeholder='Enter Password' 
      required
       className='INput_My'
      />

<button type='Submit'>Submit</button>

<p> Already have an account?{' '}
          <Link to='/login' id='links'>
           Login
          </Link></p>

    </form>
     </div>
     </div>
     
      </>
  )
}









