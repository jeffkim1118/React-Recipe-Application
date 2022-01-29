import React from 'react';
import { Link } from "react-router-dom";
import RecipeCard from './RecipeCard';

function RecipeDetails({recipes}){
    console.log(recipes)
    return(
        <div>
            <p>Hello</p>
            
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default RecipeDetails;