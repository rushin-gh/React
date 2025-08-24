import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
    
const AppLayout = () => {
    return (
        <div id='app'>
            <Header/>
            <Body/>
        </div>
    );
}

const ele = React.createElement("h1", {}, "Bhago");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);