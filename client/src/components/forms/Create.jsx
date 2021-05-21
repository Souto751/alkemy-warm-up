// Import React
import React, { useState } from 'react'

// Import Style
import '../../style/Create.css';

// Export Component
export default function Create() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const sendPost = (e) => {
        e.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: content,
                userId: 7
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then(response => response.json())
        .then(response => {
            console.log(response);
            alert('Post created successfully!');
        });
        e.target.reset();
    }

    return (
        <form id="create-form" onSubmit={(e) => sendPost(e)} autoComplete="off">
            <h2 className="create-post-title">Create Post</h2>
            <div className="input-div">
                <p className="input-name">Title</p>
                <input 
                    type="text" 
                    className="input" 
                    placeholder="Enter title..." 
                    required pattern="\S(.*\S)?" 
                    title="This field is required"
                    onChange={(e) => {setTitle(e.target.value)}}
                />
            </div>
            <div className="input-div">
                <p className="input-name">Content</p>
                <textarea 
                    id="content-input" 
                    className="input" 
                    placeholder="Write content here..." 
                    required pattern="\S(.*\S)?" 
                    title="This field is required" 
                    onChange={(e) => {setContent(e.target.value)}}
                />
            </div>
            <input type="submit" value="Post" className="create-button btn btn-primary" />
        </form>
    )
}
