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
      <h1>Auth Page</h1>
    <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleRegister}>Submit</button>
    </div>
  )
}

export default Auth