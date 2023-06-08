import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FiMenu} from 'react-icons/fi'
import {MdClose} from 'react-icons/md'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap'
import '../css/navbar.css'

function Navbar() {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

   
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className="navbar-logo">
                    Rentflat
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <MdClose/> : <FiMenu/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    
                        
                          
                          <li className='nav-item'>
                              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                  Quick look
                              </Link>
                          </li>
                          <li className='nav-item'>
                              <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                                  Register
                              </Link>
                          </li>
                          <li className='nav-item'>
                              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                                  Sign up
                              </Link>
                          </li>
                          
                   
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar