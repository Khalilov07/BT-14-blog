import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

// to - href

// Link - <a></a>

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/create">Create Post</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;