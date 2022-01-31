import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const RecipeCard = props => {  
    return(
        <div className="container">
        <div className="row">
            {/* Destructuring using .map method to display individual recipes on the screen */}
            {props.recipes.map((recipes)=>{
                return(
                    <div key={recipes.title} >
                        <div className="recipes-box">
                            <img 
                                className="recipe_box-img"
                                src={recipes.image}
                                alt={recipes.title}/>
                            <div className="recipe_text">
                                <h5 className="recipes_title">
                                    {/* If the name of recipe is less than 20 characters, display the name normally. Otherwise 
                                    shorten them into 25 characters and display the rest with triple dots. */}
                                    { recipes.title.length < 20 ? `${recipes.title}` : `${recipes.title.substring(0, 25)}...` }
                                </h5>
                            </div>
                            {/* Create links to individual recipes and direct them to RecipeDetails components with their unique id. */}
                                <Link to={{
                                    pathname:`/recipedetails/${recipes.id}`,
                                    state: { recipes: recipes.title}
                                }}>View Recipe</Link>                                                                
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    )
}
    

export default RecipeCard;