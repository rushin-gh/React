import { useEffect, useState } from "react";

const Header = () => {
    const [btnText, setBtnText] = useState('Login');

    console.log('Header rendered...')

    useEffect(() => {
        console.log('Use Effect Called!')
    }, [btnText]);

    return (
        <div id='header'>
            <div id='logo-container'>
                <img id='logo' src='https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png'/>
            </div>
            <div id='nav-items'>
                <ul>
                    <li>Home</li>
                    <li><a href='/about'>About us</a></li>
                    <li><a href='/contact'>Contact us</a></li>
                    <li>Cart</li>
                    <li><button onClick={() => setBtnText(btnText === 'Login' ? 'Logout' : 'Login')}>{btnText}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;