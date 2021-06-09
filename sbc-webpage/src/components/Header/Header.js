import {Link} from 'react-router-dom'
import './Header.css'
import { FaShoppingCart } from "react-icons/fa";
import { GiCrystalGrowth } from "react-icons/gi";
import { GiEgyptianProfile} from "react-icons/gi";
import { GiGreatPyramid} from "react-icons/gi";
import { GiUfo} from "react-icons/gi";
import { FaBookReader} from "react-icons/fa"
import { BsFillStarFill} from "react-icons/bs"
import {AiOutlineMenu} from "react-icons/ai"
import {useState} from 'react'
import axios from 'axios'

const Header = (props) => {

  const handleLogout= ()=>{
    axios.get('/api/logout')
  }

  const [showMenu,setshowMenu]=useState(false)

  const toggleMenu= ()=>setshowMenu(!showMenu)

  return(
    <section>
      <header className="main-header">
        <img className='headerLogo' src='https://shidas-broom-closet.s3.us-east-2.amazonaws.com/andinkra+symbol+strength.PNG' alt='logo'/>
        <h4 className='headerH4'> FREE SHPPING ON ALL ORDERS OVER $45</h4>
        <Link to='/' className='links'>Home <GiGreatPyramid/></Link> {/* <--- Changed name of 'Dash' to 'Home' */}
        <Link to= '/aboutus' className='links'>About Us <FaBookReader/></Link>
        <Link to='/auth' className='links'>Login <GiEgyptianProfile/></Link>
        <Link to='/products' className='links'>Products <GiCrystalGrowth/></Link>
        <Link to= '/services' className='links'>Book Now <BsFillStarFill/></Link>
        <Link to='/mycart' className='links'>Cart <FaShoppingCart /></Link> 
        <Link to='/auth' className='links' onClick ={handleLogout}>Log Out <GiUfo/></Link>
      </header>
      {showMenu && <header className='nav-drop'>
      <img className='headerLogo' src='https://shidas-broom-closet.s3.us-east-2.amazonaws.com/andinkra+symbol+strength.PNG' alt='logo'/>
      <h4 className='headerH4'> FREE SHPPING ON ALL ORDERS OVER $45</h4>
      <Link to='/' className='links-drop'>Home <GiGreatPyramid/></Link> {/* <--- Changed name of 'Dash' to 'Home' */}
      <Link to= '/aboutus' className='links-drop'>About Us <FaBookReader/></Link>
      <Link to='/auth' className='links-drop'>Login <GiEgyptianProfile/></Link>
      <Link to='/products' className='links-drop'>Products <GiCrystalGrowth/></Link>
      <Link to= '/services' className='links-drop'>Book Now <BsFillStarFill/></Link>
      <Link to='/mycart' className='links-drop'>Cart <FaShoppingCart /></Link> 
      <Link to='/auth' className='links-drop' onClick ={handleLogout}>Log Out <GiUfo/></Link>
    </header>}
    <button onClick={toggleMenu} className='drop-header-menu'>Menu <AiOutlineMenu/></button>
  </section>
  )
}

export default Header