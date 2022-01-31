import React from 'react';
import { Link } from "react-router-dom";

function RecipeDetails({props}){
    console.log(props)
    
    return(
        <div>
            <p>Hello</p>
            
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default RecipeDetails;