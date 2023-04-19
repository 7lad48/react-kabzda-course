import React from 'react';

import './App.css';

export default function App() {
    return (
        <div className="App">
            Hello
            <Rating/>
        </div>
    );
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star() {
    return (
        <div>
            star
        </div>
    );
}