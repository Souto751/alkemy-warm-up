// Import React
import React from 'react';
import { Link } from 'react-router-dom'

// Import Style
import '../../style/Header.css';

// Export Component
export default function Header() {
    return (
        <div id="header">
            <h1 className="page-title">Blog</h1>
            <div className="header-links">
                <Link to="/" style={{ textDecoration: 'none' }}><p className="header-link">Home</p></Link>
                <Link to="/create" style={{ textDecoration: 'none' }}><p className="header-link">Post</p></Link>
            </div>
        </div>
    )
}
