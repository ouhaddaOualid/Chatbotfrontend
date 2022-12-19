import React, {useState} from "react";  
import './NavbarStyle.css'
import { Link } from "react-router-dom";
import{FaBars} from "react-icons/fa"
import { click } from "@testing-library/user-event/dist/click";
import Logo from '../assets/EMI_Bank__1_-removebg-preview (6).png'
const Navbar = () => {
    const[click,setClick] = useState(false)
    const handleClick = () =>setClick(!click)
  return (
    <div className="header">
                <div className="logoContainer">
                <img src={Logo} alt ="Logo" className="Logo"/>
             </div>
        <Link to='/'><h1 className="emi"> EMI BANK</h1></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu' }>
            <li>
                <Link to='/' >HOME</Link>
            </li>
            <li>
                <Link to='/contact'>CONTACT</Link>
            </li>
            <li>
                <Link to='/news'>ABOUT US</Link>
            </li>
            <li>
                <Link to='/plus'>MORE</Link>
            </li>
            <li>
                <Link to='/Login'>Se connecter</Link>
            </li>
        </ul>
        <div className="humberger" onClick={handleClick}>
            {click ? (<FaBars size={20} style={{color :"white"}}/>):(<FaBars size={20} style={{color :"white"}}/>)}
        </div>
    </div>
  );
}

export default Navbar;
