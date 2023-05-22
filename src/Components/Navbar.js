import React from 'react';
import {logo} from "../image/logo.png"

const Navbar = () => {
  return (
    <div>
        {/* left */}
        <div className='bg-red-300 w-30 flex'> 
        <img src={logo} alt="" className='object-cover'/>
        </div>
    </div>
  )
}

export default Navbar
