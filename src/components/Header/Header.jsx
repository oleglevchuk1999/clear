import React from 'react';
import './Header.css';
import logoimg from './../../images/logo2.png'
import {  NavLink } from 'react-router-dom';

const Header = () => {
    return ( 
        
        <header>
            <div className='logo'>
                <img src={logoimg} alt="logo" />
            </div>

                <nav id='menu'>
                    <input type='checkbox' id='responsive-menu' onclick='updatemenu()'/><label></label>
                        <ul>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink class='dropdown-arrow' to='http://'>Products</NavLink>
                                <ul class='sub-menus'>
                                    <li><NavLink to='http://'>Products 1</NavLink></li>
                                    <li><NavLink to='http://'>Products 2</NavLink></li>
                                    <li><NavLink to='http://'>Products 3</NavLink></li>
                                    <li><NavLink to='http://'>Products 4</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink class='dropdown-arrow' to='http://'>Services</NavLink>
                                <ul class='sub-menus'>
                                <li><NavLink to='http://'>Services 1</NavLink></li>
                                <li><NavLink to='http://'>Services 2</NavLink></li>
                                <li><NavLink to='http://'>Services 3</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to='http://'>Contact Us</NavLink></li>
                        </ul>
                </nav>

                <nav id='menu'>
                    <input type='checkbox' id='responsive-menu' onclick='updatemenu()'/><label></label>
                        <ul>
                            <li><NavLink to='/login'>Login</NavLink></li>
                            <li><NavLink to='http://'>Sign in</NavLink></li>
                            <li><NavLink to='http://'>Sign out</NavLink></li>
                        </ul>
                </nav>

        </header>
        
     );
}
export default Header;