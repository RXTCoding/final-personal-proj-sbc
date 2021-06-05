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
        if(err.rresponse.status===511){
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
    <div>
      <h1>Welcome to <br/> Shida's Broom Closet</h1>
      {products.map((product)=>{
        return(
          <div className='prodParentDiv' key={product.product_id}>
            <img className='prodImg' src={product.product_image} alt={product.product_name}/>
            <h4 className='prodName'>{product.product_name}</h4>
            <p className='prodDescription'>{product.product_description}</p>
            {user && <button onClick={()=> handleAddToCart(product.product_id)}>Add To Cart</button>}
          </div>
          )
        })
      }
    </div>
  )
}

export default Products