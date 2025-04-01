import React from 'react'
import logo from '../assets/react.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const linkClass = ({isActive}) => 
        isActive
        ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
        : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
    return (
    <nav>
        
    </nav>
  )
}

export default Navbar
