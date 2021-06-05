import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return(
    <header>
      <img className='headerLogo' src='https://shidas-broom-closet.s3.us-east-2.amazonaws.com/andinkra+symbol+strength.PNG' alt='logo'/>
      <h4 className='headerH4'> FREE SHPPING ON ALL ORDERS OVER $45</h4>
      <Link to='/'>Home</Link> {/* <--- Changed name of 'Dash' to 'Home' */}
      <Link to='/auth'>Login</Link>
      <Link to='/products'>Products</Link>
      <Link to='/carts'>Cart</Link>
    </header>
  )
}

export default Header