// Import React
import React from 'react';
import { Link } from 'react-router-dom';

// Import Style
import '../../style/Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Font Awesome
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

// Export Component
export default function Post(props) {

    const selectId = () => {
        localStorage.setItem('postId', props.props.id);
    }

    const deletePost = () => {
        selectId();
        const idToDelete = localStorage.getItem('postId');
        fetch('https://jsonplaceholder.typicode.com/posts/' + idToDelete, {
            method: 'DELETE',
        }).then(response => {
            console.log(response);
            alert("Post deleted successfully!");
        });
    }

    return (
        <div className="post">
            <div>
                <h3 className="post-title">{props.props.title}</h3>
            </div>
            <div className="post-options">
                <Link to={"/post/" + props.props.id} style={{ textDecoration: 'none' }}><button className="post-link" onClick={() => selectId()}><FontAwesomeIcon icon={faLink} /></button></Link>
                <Link to="/update"><button className="edit-post" onClick={() => selectId()}><FontAwesomeIcon icon={faEdit} color="black" /></button></Link>
                <button className="delete-post" onClick={() => deletePost()}><FontAwesomeIcon icon={faTrashAlt} color="white" /></button>
            </div>
        </div>
    )
}
