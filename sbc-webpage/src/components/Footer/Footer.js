import './Footer.css'
import {FiInstagram} from 'react-icons/fi'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {CgMail} from 'react-icons/cg'

const Footer = () => {
    return(
        <div className='footerDiv'>
            <h5 className='footerllc'> Shida's Broom Closet LLC </h5> <h1> <FiInstagram/> <AiFillFacebook/> <AiOutlineYoutube/> <CgMail/>  </h1>
        </div>
    )
}

export default Footer