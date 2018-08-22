import React from 'react';
import { Link } from 'react-router-dom';

import Instagram from '../assets/instagram.png';
import Tumblr from '../assets/tumblr.png';
import Twitter from '../assets/twitter.png';
import '../styles/nav.css';

const NavBottom = () => (
    <footer className='navbar fixed-bottom bottom-nav justify-content-end'>
        <Link className='navbar-nav' to='/'>
            <img className='rounded' src={Instagram} />
        </Link>
        <Link className='navbar-nav' to='/'>
            <img className='rounded' src={Tumblr} />
        </Link>
        <Link className='navbar-nav' to='/'>
            <img className='rounded' src={Twitter} />
        </Link>
    </footer>
);

export default NavBottom;