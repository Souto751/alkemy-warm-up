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
            <div>
                <div className="post-options">
                    <Link to="/update"><button className="edit-post"><FontAwesomeIcon icon={faEdit} color="black" /></button></Link>
                    <button className="delete-post"><FontAwesomeIcon icon={faTrashAlt} color="white" /></button>
                </div>
            </div>
            <div>
                <h3 className="post-title">Title</h3>
            </div>
            <div>
                <img src="https://assets-es.imgfoot.com/marco-reus-2021-60055e5017876.jpg" alt="post" className="post-image" />
            </div>
            <div className="post-date-category">
                <p className="post-category-main">{"Sports"}</p>
                <p className="separator">|</p>
                <p className="post-created-at">{"2021/05/20"}</p>
            </div>
            <div className="post-link-div">
                <Link to="/post/1" style={{ textDecoration: 'none' }}><button className="post-link">Read the blog here!</button></Link>
            </div>
        </div>
    )
}
