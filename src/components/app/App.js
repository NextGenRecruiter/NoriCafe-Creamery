import React from 'react';
import './App.css';
import desktopImage from './NoriCafe.png';

const App = () => {
    const imageUrl = desktopImage;

    return (
        <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="App-content">
   
            </div>
        </div>
    );
};

export default App;
