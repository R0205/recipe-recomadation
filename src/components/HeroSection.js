import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const HeroSection = ({ isAuthenticated }) => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleButtonClick = () => {
        if (isAuthenticated) {
            navigate("/recipes"); // Navigate to recipes if authenticated
        } else {
            navigate("/login"); // Navigate to login if not authenticated
        }
    };

    return (
        <section className='hero-section' id='hero'>
            <div className='hero-content'>
                <h1>Discover Delicious Recipes</h1>
                <p>Explore, cook, and enjoy recipes tailored to your taste.</p>
                <button className='cta-button' onClick={handleButtonClick}>Get Started</button>
            </div>
        </section>
    );
}

export default HeroSection;
