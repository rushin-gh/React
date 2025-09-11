import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import AboutUs from './Components/AboutUs';
import Error from './Components/Error';
import ContactUs from './Components/ContactUs';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Phone from './Components/Phone';
import Email from './Components/Email';
import RestaurantPage from './Components/RestaurantPage';
import UserFunComp from './Components/UserFunComp';
import UserClassComp from './Components/UserClassComp';



const AppLayout = () => {
    return (
        <div id='app'>
            <Header/>
            <Outlet/>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '',
                element: <Body/>
            },
            {
                path: 'about',
                element: <AboutUs/>
            },
            {
                path: 'contact',
                element: <ContactUs/>,
                children: [
                    {
                        path: 'phone',
                        element: <Phone/>
                    },
                    {
                        path: 'email',
                        element: <Email/>
                    }
                ]
            },
            {
                path: 'restaurant/:resId',
                element: <RestaurantPage/>
            },
            {
                path: 'user',
                element: <UserClassComp name="Sam Altman"/>
            }
        ],
        errorElement: <Error/>
    }
]);

const ele = React.createElement("h1", {}, "Bhago");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);