// Import React
import React from 'react'

// Import Style
import '../../style/Home.css';

// Import Components
import Header from '../header/Header';
import Post from '../post/Post';

// Export Component
export default function Home() {
    
    return (
        <div id="home">
            <Header />
            <div className="posts-div">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}
