// Import React
import React from 'react';
import { Link } from 'react-router-dom';

// Import Style
import '../../style/Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Font Awesome
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

// Export Component
export default function Post() {
    return (
        <div className="post">
            <div className="post-options">
                <button className="edit-post"><FontAwesomeIcon icon={faEdit} color="black" /></button>
                <button className="delete-post"><FontAwesomeIcon icon={faTrashAlt} color="white" /></button>
            </div>
            <div>
                <img src="https://assets-es.imgfoot.com/marco-reus-2021-60055e5017876.jpg" alt="post image" className="post-image" />
            </div>
            <div>
                <h3 className="post-title">Title</h3>
            </div>
            <div className="post-link-div">
                <Link to="/" style={{ textDecoration: 'none' }}><button className="post-link">Read the blog here!</button></Link>
            </div>
        </div>
    )
}
