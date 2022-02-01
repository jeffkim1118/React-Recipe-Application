import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function RecipeDetails(){
    //It grabs the current url then store only the id number into the recipeId variable.
    const[recipe, getRecipe] = useState([]);
    //Create a fetch request using the idquery variable.
   useEffect(() => {
    let path = window.location.pathname;
    let recipeId = path.substring(15);

    
    //Query
    const idquery = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=5c28e37ff52340769cc4e6978685e652`;
    fetch(idquery)
    .then(res => res.json())
    .then(data => getRecipe(data))
   },[])
    
    return(
        <div>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} /><br/>
            <p>Time to prepare: {recipe.readyInMinutes} Minutes</p>
            <a href={recipe.sourceUrl} target="_blank">View the recipe</a>
            <br/>
            <br/>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default RecipeDetails;