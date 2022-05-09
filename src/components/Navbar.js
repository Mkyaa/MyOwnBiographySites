import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className='navbar'>
            <ul>
                <li className='navbar-menu'>
                    <Link to={'/Home'} className='a'>HOME</Link>
                </li>
                <li className='navbar-menu'>
                    <Link to={'/About'} className='a'>ABOUT</Link>
                </li>
                <li className='navbar-menu'>
                    <Link to={'/Services'} className='a'>SERVICES</Link>
                </li>
                <li className='navbar-menu'>
                    <Link to={'/Skills'} className='a'>SKILLS</Link>
                </li>
                <li className='navbar-menu'>
                    <Link to={'/Education'} className='a'>EDUCATION</Link>
                </li>
                <li className='navbar-menu'>
                    <Link to={'/Experience'} className='a'>EXPERİENCE</Link>
                </li>
                <li className='navbar-menu'>
                    <Link to={'/Work'} className='a'>WORK</Link>
                </li>
                 <li className='navbar-menu'>
                    <Link to={'/Blog'} className='a'>BLOG</Link>
                </li>
                 <li className='navbar-menu'>
                    <Link to={'/Contact'} className='a'>CONTACT</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;