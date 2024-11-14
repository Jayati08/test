import React from 'react';
import './Navbar.css'
function Navbar() {
    return (
        <nav className='nav'>
            
          
            <button className="my-button"> 
				<a href='/'>Home</a>
            </button> 
            <button className="my-button"> 
				<a href='/add'>Add</a>
            </button> 
            <button className="my-button"> 
				<a href='/view'>View Employee data</a>
            </button>
            
        </nav>
    )
}
export default Navbar