import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/nav.css';

const NavTop = () => (
    <nav className='navbar navbar-expand-lg fixed-top top-nav'>
        <Link to='/main'>
            <div className='ml-2 navbar-nav main'></div>
        </Link>
        <Link to='/about'>
            <div className='ml-3 navbar-nav about'></div>
        </Link>
        <Link to='/portfolio'>
            <div className='ml-3 navbar-nav portfolio'></div>
        </Link>
        <Link to='/contact'>
            <div className='ml-3 navbar-nav contact'></div>
        </Link>
        <Link to='/commission'>
            <div className='ml-3 navbar-nav commission'></div>
        </Link>
        <Link to='/shop'>
            <div className='ml-3 navbar-nav shop'></div>
        </Link>
    </nav>
);

export default NavTop;