// Import React
import React from 'react';

// Import Style
import '../../style/Update.css';

// Import Variables
import options from '../../variables/categories';

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
                <textarea className="input content-input" value={"Hello World"} required />
            </div>
            <div className="input-div">
                <p className="input-name">Image (URL)</p>
                <input type="text" className="input" value={"Hello World"} required />
            </div>
            <div className="input-div">
                <p className="input-name">Category</p>
                <select className="select-category input dropdown" required>
                {
                    options.map((x ,i=0) => {
                        return <option key={i} value={x.value ? x.value : ''} disabled={x.label === "Select..." ? true : false} selected={x.label === "Sports" ? true : false}>{x.label}</option>
                    })
                }
                </select>
            </div>
            <button className="create-button btn btn-primary">Update</button>
        </form>
    )
}
