// Import React
import React from 'react';
import { Link } from 'react-router-dom'

// Import Style
import '../../style/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Font Awesome
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons';

// Export Component
export default function Header() {
    return (
        <div id="header">
            <h1 className="page-title">Blog</h1>
            <div className="header-links">
                <Link to="/" style={{ textDecoration: 'none' }}><p className="header-link"><FontAwesomeIcon icon={faHome} className="hover-link" /></p></Link>
                <Link to="/create" style={{ textDecoration: 'none' }}><p className="header-link"><FontAwesomeIcon icon={faPlusCircle} className="hover-link" /></p></Link>
            </div>
        </div>
    )
}
