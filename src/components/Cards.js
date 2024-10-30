import React from 'react';
import RecipeCard from './RecipeCard';

const Cards = ({ recipes, onRecipeDelete, onEditClick }) => {
    return (
        <div className='cards-section'>
            <div className='recipe-cards'>
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <RecipeCard 
                            key={recipe._id} 
                            recipe={recipe} 
                            onDelete={() => onRecipeDelete(recipe._id)} 
                            onEdit={() => onEditClick(recipe)} // Pass the selected recipe to edit
                        />
                    ))
                ) : (
                    <p>No recipes found</p>
                )}
            </div>
        </div>
    );
};

export default Cards;
