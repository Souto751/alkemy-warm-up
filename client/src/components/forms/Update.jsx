// Import React
import React from 'react';

// Import Style
import '../../style/Update.css';

// Export Component
export default function Update() {
    return (
        <form id="update-form">
            <h2 className="update-post-title">Update Post</h2>
            <div className="input-div">
                <p className="input-name">Title</p>
                <input type="text" className="input" value={"Hello World"} required />
            </div>
            <div className="input-div">
                <p className="input-name">Content</p>
                <textarea id="content-inputc" lassName="input" value={"Hello World"} required />
            </div>
            <button className="create-button btn btn-primary">Update</button>
        </form>
    )
}
