// Import React
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Import Style
import './style/Global.css';

// Import Components
import Home from './components/routes/Home';
import Post from './components/routes/PostPage';
import Create from './components/routes/AddPost';
import Update from './components/routes/UpdatePost';

function App() {

    useEffect(() => {
        const loadPosts = () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {return response.json()})
            .then(response => {
                localStorage.setItem('posts', JSON.stringify(response));
            });
        }

        loadPosts();
    }, [])

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/post/:id"><Post /></Route>
                    <Route path="/create"><Create /></Route>
                    <Route path="/update"><Update /></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
