// Import React
import React from 'react'

// Import Style
import '../../style/Create.css';

// Import Variables
import options from '../../variables/variables';

// Export Component
export default function Create() {
    return (
        <form id="create-form">
            <h2 className="create-post-title">Create Post</h2>
            <div className="input-div">
                <p className="input-name">Title</p>
                <input type="text" className="input" placeholder="Enter title..." required />
            </div>
            <div className="input-div">
                <p className="input-name">Content</p>
                <textarea className="input content-input" placeholder="Write content here..." required />
            </div>
            <div className="input-div">
                <p className="input-name">Image (URL)</p>
                <input type="text" className="input" placeholder="Enter image URL..." required />
            </div>
            <div className="input-div">
                <p className="input-name">Category</p>
                <select className="select-category input dropdown" required>
                {
                    options.map((x ,i=0) => {
                        return <option key={i} value={x.value ? x.value : ''} disabled={x.label === "Select..." ? true : false} selected={x.label === "Select..." ? true : false}>{x.label}</option>
                    })
                }
                </select>
            </div>
            <button className="create-button btn btn-primary">Post!</button>
        </form>
    )
}
