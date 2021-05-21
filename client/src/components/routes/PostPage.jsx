// Import React
import React, { useEffect, useState } from 'react';

// Import Style
import '../../style/PostPage.css';

// Import Components
import Header from '../header/Header';

// Export Component
export default function PostPage() {

    const [post, setPost] = useState({});

    useEffect(() => {
        const postId = localStorage.getItem('postId');

        const loadPostById = () => {
            fetch('https://jsonplaceholder.typicode.com/posts/' + postId, {method: 'GET'})
            .then(response => response.json())
            .then(response => {
                setPost(response);
            });
        }

        loadPostById();
    }, [])

    return (
        <div id="post-page">
            <Header />
            <div className="post-info">
                <h2 className="post-title-page">{post.title}</h2>
                <hr />
                <div className="center-content"><p className="post-content-page">{post.body}</p></div>
            </div>
        </div>
    )
}
