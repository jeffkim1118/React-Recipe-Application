import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "../App.css"

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

    //Like button to add the data into my local json file.
    let recipeData = {
        "id": recipe.id,
        "title": recipe.title,
        "img": recipe.image,
        "time" : recipe.readyInMinutes,
        "serving": recipe.servings,
        "url": recipe.sourceUrl
    }

    
    const addToFav = () =>{
        fetch('http://localhost:8000/items/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipeData)
        })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', JSON.stringify(response)));
    }
    ///////////////////////////////////////////////////////////////////////////////////

    return(
        <div>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt="recipe-pic" /><br/>
            <p>Time to prepare: {recipe.readyInMinutes} Minutes</p>
            <p>Health Score: {recipe.healthScore}</p>
            <p>Servings: {recipe.servings}</p>
            <button onClick={addToFav}>Like</button>
            <br />
            <br />
            <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">View the recipe</a>
            <br/>
            <br/>
            <Link to='/'>Go Back</Link>
            
            
        </div>
    )
}

export default RecipeDetails;