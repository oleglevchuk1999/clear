import React from 'react';
import './Header.css';
import logoimg from './../../images/logo2.png'
import { Routes, Route, Link } from 'react-router-dom';

const Header = () => {
    return ( 
        
        <header>
            <div className='logo'>
                <img src={logoimg} alt="logo" />
            </div>

                <nav id='menu'>
                    <input type='checkbox' id='responsive-menu' onclick='updatemenu()'/><label></label>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><a class='dropdown-arrow' href='http://'>Products</a>
                                <ul class='sub-menus'>
                                    <li><a href='http://'>Products 1</a></li>
                                    <li><a href='http://'>Products 2</a></li>
                                    <li><a href='http://'>Products 3</a></li>
                                    <li><a href='http://'>Products 4</a></li>
                                </ul>
                            </li>
                            <li><a href='http://'>About</a></li>
                            <li><a class='dropdown-arrow' href='http://'>Services</a>
                                <ul class='sub-menus'>
                                <li><a href='http://'>Services 1</a></li>
                                <li><a href='http://'>Services 2</a></li>
                                <li><a href='http://'>Services 3</a></li>
                                </ul>
                            </li>
                            <li><a href='http://'>Contact Us</a></li>
                        </ul>
                </nav>

                <nav id='menu'>
                    <input type='checkbox' id='responsive-menu' onclick='updatemenu()'/><label></label>
                        <ul>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link href='http://'>Sign in</Link></li>
                            <li><Link href='http://'>Sign out</Link></li>
                        </ul>
                </nav>

        </header>
        
     );
}
export default Header;