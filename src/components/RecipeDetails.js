import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react/cjs/react.production.min';

function RecipeDetails(){
    //It grabs the current url then store only the id number into the recipeId variable.
    let path = window.location.pathname;
    let recipeId = path.substring(15);

    const[recipe, getRecipe] = useState([])
    //Query
    const idquery = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=5c28e37ff52340769cc4e6978685e652`;
    //Create a fetch request using the idquery variable.
    fetch(idquery)
    .then(res => res.json())
    .then(data => getRecipe(data));

    console.log(recipeId)
    return(
        <div>
            <p>Hello</p>
            
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default RecipeDetails;