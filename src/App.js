import React from 'react';
import List from "./Components/List.js"
import './App.css';

const App = () => {
    return (
        <div className="App">
            <h1 className="movie-list-title">THE MOST AMAZING MOVIE LIST</h1>
            <List className="List"/>
        </div>
    )
}

export default App;
