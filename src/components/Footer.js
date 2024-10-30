import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <h2>Recipe Recomdation App</h2>
                <p>&copy; 2024 Recipe App. All rights reserved.</p>
                <div className='social-links'>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook-f"></i>Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <i className="fab fa-twitter"></i>Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default Footer