// Import React
import React from 'react'

// Import Style
import '../../style/Home.css';

// Import Components
import Header from '../header/Header';
import Post from '../post/Post';

// Export Component
export default function Home() {

    const posts = JSON.parse(localStorage.getItem('posts'));

    return (
        <div id="home">
            <Header />
            <div className="posts-div">
            {
                posts.map((post, key = 0) => {
                    return <Post key={key} props={post} />
                })
            }
            </div>
        </div>
    )
}
