import React from "react";
import { Link } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";
import "../App.css";

const RecipeCard = props => (
    <div className="container">
        {console.log(props)}
        <div className="row">
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
                                    { recipes.title.length < 20 ? `${recipes.title}` : `${recipes.title.substring(0, 25)}...` }
                                </h5>
                            </div>
                            <button className="recipe-buttons">
                                {/* <Link to={{
                                    pathname: `/recipes/${recipes.id}`,
                                    state: {recipes: recipes.title}
                                }}>View Recipe</Link> */}
                            View Recipe</button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
)
export default RecipeCard;