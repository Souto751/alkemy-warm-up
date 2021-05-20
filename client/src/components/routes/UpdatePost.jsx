// Import React
import React from 'react';

// Import Style
import '../../style/Update.css';

// Import Components
import Update from '../forms/Update';
import Header from '../header/Header';

export default function UpdatePost() {
    return (
        <div id="update">
            <Header />
            <Update />
        </div>
    )
}
