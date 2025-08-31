import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import AboutUs from './Components/AboutUs';
import Error from './Components/Error';
import ContactUs from './Components/ContactUs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const AppLayout = () => {
    return (
        <div id='app'>
            <Header/>
            <Body/>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>
    },
    {
        path: '/about',
        element: <AboutUs/>
    },
    {
        path: '/contact',
        element: <ContactUs/>
    },
    // {
    //     path: '*',
    //     element: <Error/>
    // }
]);

const ele = React.createElement("h1", {}, "Bhago");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);