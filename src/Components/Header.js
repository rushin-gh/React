import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import useOnlineStatus from "../util/useOnlineStatus";

const Header = () => {
    const [btnText, setBtnText] = useState('Login');

    console.log('Header rendered...')

    useEffect(() => {
        console.log('Use Effect Called!')
    }, [btnText]);

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return <h1>Your are offline</h1>
    }

    return (
        <div id='header'>
            <div id='logo-container'>
                <img id='logo' src='https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png'/>
            </div>
            <div id='nav-items'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About us</Link></li>
                    <li><Link to='/contact'>Contact us</Link></li>
                    <li>Cart</li>
                    <li><button onClick={() => setBtnText(btnText === 'Login' ? 'Logout' : 'Login')}>{btnText}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;