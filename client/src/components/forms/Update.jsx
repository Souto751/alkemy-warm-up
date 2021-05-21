// Import React
import React, { useState, useEffect } from 'react';

// Import Style
import '../../style/Update.css';

// Export Component
export default function Update() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const postId = localStorage.getItem('postId');
    const [postToUpdate, setPostToUpdate] = useState({});

    // Loads the post information to update, just for display the current information on the inputs
    useEffect(() => {
        const id = localStorage.getItem('postId');
        
        const loadPostToUpdate = () => {
            fetch('https://jsonplaceholder.typicode.com/posts/' + id, {method: 'GET'})
            .then(response => response.json())
            .then(response => {
                setPostToUpdate(response);
            });
        }

        loadPostToUpdate();
    }, [])

    // Updates the post sending the title and the body
    const updatePost = (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
            method: 'PATCH',
            body: JSON.stringify({
                title: title,
                body: content
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then(response => response.json())
        .then(response => {
            console.log(response);
            alert('Post updated successfully!');
        });
        e.target.reset();
    }

    return (
        <form id="update-form" onSubmit={(e) => updatePost(e)} autoComplete="off">
            <h2 className="update-post-title">Update Post</h2>
            <div className="input-div">
                <p className="input-name">Title</p>
                <input 
                    type="text" 
                    className="input" 
                    defaultValue={postToUpdate.title} 
                    required
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="input-div">
                <p className="input-name">Content</p>
                <textarea 
                    id="content-input" 
                    lassName="input" 
                    defaultValue={postToUpdate.body} 
                    required 
                    onChange={e => setContent(e.target.value)}
                />
            </div>
            <input type="submit" value="Post" className="create-button btn btn-primary" />
        </form>
    )
}
