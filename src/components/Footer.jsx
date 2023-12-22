import React from 'react'
import logo from "../assets/logo.jpg"
import { FaPhoneAlt,FaMapMarkerAlt, FaEnvelope, FaInstagram
} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="fot">
      <div className="fot1">
       <div className="logo2"><img src={logo}/></div>
      <div className="cont">
      <div className='point'><FaPhoneAlt color='#FEC734' />&nbsp;  + 91 980 981 95 95</div>
      <div className='point'><FaMapMarkerAlt color='#FEC734'/> &nbsp; F – 198, I.P.I.A., Kota – 324005 (Rajasthan) INDIA</div>
      <div className='point'><FaEnvelope color='#FEC734'/> &nbsp; info@anpltd.in</div>


</div>
      
      </div>

      <div className="rect"></div>



     <div className="fot2"> 
     <div className="con">
     &nbsp; &nbsp; &#169; 2023 Start Smart 
      </div>
      <div className="logo">
      <FaInstagram color='white' size={'2rem'}  />

      </div>
     
     </div>
    </div>
  )
}

export default Footer