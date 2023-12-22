import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg"
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
        <img src={logo}/>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/#about"}>About Us</HashLink>
            <HashLink to={"/#solution"}>Solutions</HashLink>
            <HashLink to={"/#skill"}>Skill</HashLink>
            <HashLink to={"/#services"}>Services</HashLink>
            <Link to={"/contact"}>Contact Us</Link>
        </main>
    </nav>
  )
}

export default Header;