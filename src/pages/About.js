import React from 'react';
// Ensure to import your CSS file for styling

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-overlay'>
        <h1>About Recipes</h1>
        <p>RecipeHub is a platform for food lovers to discover, share, and create new recipes.</p>
        
        <div className='about-content'>
          <p>We aim to provide a simple and intuitive experience for home cooks and food enthusiasts alike. Whether you're looking for new meal ideas or wanting to share your own culinary creations, RecipeHub is here to inspire.</p>
          
          <p>Join our community and explore thousands of recipes across different cuisines and dietary preferences. Happy cooking!</p>

          <a href="/recipes" className='cta-button'>Explore Recipes</a>
        </div>
      </div>
    </div>
  );
}

export default About;
