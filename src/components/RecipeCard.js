import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Route, useHistory } from "react-router-dom";
import "../App.css";
import RecipeDetails from "./RecipeDetails";

const RecipeCard = props => {  
    return(
        <div className="container">
        <div className="row">
            {props.recipes.map((recipes)=>{
                return(
                    <div key={recipes.title} >
                        <p>{recipes.id}</p>
                        <div className="recipes-box">
                            <img 
                                className="recipe_box-img"
                                src={recipes.image}
                                alt={recipes.title}/>
                            <div className="recipe_text">
                                <h5 className="recipes_title">
                                    { recipes.title.length < 20 ? `${recipes.title}` : `${recipes.title.substring(0, 25)}...` }
                                </h5>
                            </div>
                            {/* {console.log(recipes.id)}                            */}
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