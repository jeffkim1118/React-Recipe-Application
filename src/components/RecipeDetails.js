import React from 'react';
import { Link } from "react-router-dom";

function RecipeDetails(){
    let path = window.location.pathname;
    let recipeId = path.substring(15);
    
    const idquery = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=5c28e37ff52340769cc4e6978685e652`;

    fetch(idquery)
    .then(res => res.json())
    .then(data => console.log(data));

    return(
        <div>
            <p>Hello</p>
            
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default RecipeDetails;