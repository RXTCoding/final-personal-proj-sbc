import {Link} from 'react-router-dom'
import './Header.css'
import { FaShoppingCart } from "react-icons/fa";
import { GiCrystalGrowth } from "react-icons/gi";
import { GiEgyptianProfile} from "react-icons/gi";
import { GiGreatPyramid} from "react-icons/gi";

const Header = () => {
  return(
    <header>
      <img className='headerLogo' src='https://shidas-broom-closet.s3.us-east-2.amazonaws.com/andinkra+symbol+strength.PNG' alt='logo'/>
      <h4 className='headerH4'> FREE SHPPING ON ALL ORDERS OVER $45</h4>
      <Link to='/' className='links'>Home <GiGreatPyramid/></Link> {/* <--- Changed name of 'Dash' to 'Home' */}
      <Link to='/auth' className='links'>Login <GiEgyptianProfile/></Link>
      <Link to='/products' className='links'>Products <GiCrystalGrowth/></Link>
      <Link to='/carts' className='links'>Cart <FaShoppingCart /></Link> 
    </header>
  )
}

export default Header