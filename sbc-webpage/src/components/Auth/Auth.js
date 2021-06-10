import axios from 'axios'
// import express from 'express'
import {useState} from 'react'
import {setUser} from '../../redux/authReducer'
import {useDispatch} from 'react-redux'
import {setCart} from '../../redux/cartReducer'
import './Auth.css'

const Auth = (props) => { //<-- be sure to pass props from state
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const dispatch = useDispatch()

const handleRegister =()=>{
  axios.post('/api/register',{email,password})
  .then((res)=>{dispatch(setUser(res.data))
    axios.get('/api/mycart').then((response)=>{
      console.log(response.data,"from auth js")
      dispatch(setCart(response.data))
      props.history.push('/products')
    })
  })
  .catch(err=> console.log(err))
}
const handleLogin= ()=>{
  axios.post('/api/login',{email, password})
  .then((res)=>{dispatch(setUser(res.data))
    axios.get('/api/mycart').then((response)=>{
      console.log(response.data)
      dispatch(setCart(response.data))
      props.history.push('/products')
    })
  })
}

    return(
    <div className='authParentDiv'>
      
      
    <section className='Authpage'>
    <h1>Create Your Account</h1>
    <div className='input-filed'>
    <input className='input' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
    <input className='input' value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
    </div>
    
    <div>
    <button className="input-button" onClick={handleLogin}>Login</button>
    <button className='input-button' onClick={handleRegister}>Register</button>
    </div>
    </section> 
    </div>

    



  )
}

export default Auth