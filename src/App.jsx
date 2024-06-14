import './App.css'
import React from 'react';
import PostsListPage from './pages/PostListpage';
import Menu from './navigation/Menu';

const App = () => {
    return (
        <div className="App">
            <Menu />
            <PostsListPage />
        </div>
    );
};

export default App;
