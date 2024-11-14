import React from 'react';
import './Navbar.css'
function Navbar2() {
    return (
        <nav className='nav1'>
            
          
            <button className="my-button"> 
				<a href='/Edit'>Edit</a>
            </button> 
            <button className="my-button"> 
				<a href='/delete'>Delete</a>
            </button> 
            
        </nav>
    )
}
export default Navbar2