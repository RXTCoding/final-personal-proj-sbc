import axios from 'axios'
import {useState} from 'react'
import {useEffect} from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import {setCart} from '../../redux/cartReducer'
import "./Products.css"

const Products = (props) => {
  const [products, setProducts]= useState([])
  const {user}= useSelector((store)=>store.authReducer)
  const {cart}= useSelector((store)=>store.cartReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    axios.get('/api/products')
    .then((res)=>{
      setProducts(res.data)
    }).catch(err=> console.log(err))
  }, [])

  const handleAddToCart = (product_id)=> {
    const product=cart.find((product)=> product.product_id=== product_id)
    console.log(product)
    if(!product){
      axios.post(`/api/cart/${product_id}`)
      .then((res)=>{
        dispatch(setCart(res.data))
      }).catch((err)=>{
        console.log(err)
        if(err.response.status===511){
          props.history.push('/auth')
        }
      })
    }else{
      axios.put(`/api/cart/${product_id}`, {quantity: product.quantity+1})
      .then((res)=>{
        dispatch (setCart(res.data))
      }).catch(err=>{
        console.log(err)
        if (err.response.status=== 511){
          props.history.push('/auth')
        }
      })
    }
  }

  return(
    <div className='container'>
      <h1>Welcome to <br/> Shida's Broom Closet</h1>
      <div className='prodSerImgParent'>
            <img width='30%' height='40%' src='https://shidas-broom-closet.s3.us-east-2.amazonaws.com/Book+a+Reading.PNG' alt='book a reading'/>
            <img width='30%' height='40%' src='https://shidas-broom-closet.s3.us-east-2.amazonaws.com/book+a+yoga+session.PNG' alt=' book a yoga session'/>
            <img width='30%' height='40%' src='https://shidas-broom-closet.s3.us-east-2.amazonaws.com/book+a+sound+SQR.PNG' alt= ' book a sound healing session'/>
            </div>
      {products.map((product)=>{
        return(
          <section className='prodParentDiv'>
            <div className='prodContainer' key={product.product_id}>
              <div className='prodImgChildDiv'>
              <img className='prodImg' width='50%' height='60%' src={product.product_image} alt={product.product_name}/>
              <div className='prodTextContainer'>
              <h2 className='prodName'>{product.product_name}</h2>
              <p className='prodDescription'>{product.product_description}</p>
              <p className='prodPrice'>${product.price}</p>
              </div>
              <button onClick={()=> handleAddToCart(product.product_id)}>Add To Cart</button>
              </div>
            </div>
            </section>
          )
        })
      }
    </div>
  )
}

export default Products