import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id="footer">
            <div className='footer-content'>
                <div className="footer-content-left">
                    <img src="/logo3.png" alt="UrbanEats" className='logo' />
                    <p>
                        UrbanEats is your trusted food delivery platform, bringing delicious meals from your favorite restaurants straight to your doorstep. Enjoy fast delivery, fresh ingredients, and an exceptional dining experience anytime, anywhere.
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-XXXXXXXXXX</li>
                        <li>support@urbaneats.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2026 &copy; UrbanEats.com - All Rights Reserved.</p>

        </div>
    )
}

export default Footer