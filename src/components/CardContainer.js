import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function CardContainer(props){
    //Destructuring props to access recipe object
    const {recipe} = props;
    console.log(recipe);
    return(
        <div key={recipe.title} >
                        <div className="recipes-box">
                            <img 
                                className="recipe_box-img"
                                src={recipe.image}
                                alt={recipe.title}/>
                            <div className="recipe_text">
                                <h5 className="recipes_title">
                                    {/* If the name of recipe is less than 20 characters, display the name normally. Otherwise 
                                    shorten them into 25 characters and display the rest with triple dots. */}
                                    { recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }
                                </h5>
                            </div>
                            {/* Create links to individual recipes and direct them to RecipeDetails components with their unique id. */}
                                <Link to={{
                                    pathname:`/recipedetails/${recipe.id}`,
                                    state: { recipes: recipe.title}
                                }}>View Recipe</Link>                                                              
                        </div>
                    </div>
    )
}
