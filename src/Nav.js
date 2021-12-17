import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import dummygram2 from './Image/dummygram2.png';
function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };
    const navStyle2 = {
        alignSelf: 'flex-end',
        display: 'flex',
        textDecoration: 'none'
    };

  return (
    <nav>
            <Link to="/" style={navStyle2}>
                <img src ={dummygram2} width='250px' alt={dummygram2}/>
            </Link>
            <ul className="nav-links">
            <Link style={navStyle} to="/">
                <li>Home</li>
            </Link>
            <Link to="/post" style={navStyle}>
                <li>Post List</li>
            </Link>
            <Link to="/tag" style={navStyle}>
                <li>Tag List</li>
            </Link>
            <Link style={navStyle} to="/about">
                <li>About</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;