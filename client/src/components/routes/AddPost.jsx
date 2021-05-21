// Import React
import React from 'react';

// Import Style
import '../../style/Create.css';

// Import Components
import Header from '../header/Header';
import Create from '../forms/Create';

// Export Component
export default function AddPost() {
    return (
        <div id="create">
            <Header />
            <Create />
        </div>
    )
}
