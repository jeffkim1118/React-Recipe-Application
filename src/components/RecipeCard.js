import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Route, useHistory } from "react-router-dom";
import "../App.css";
import RecipeDetails from "./RecipeDetails";

const RecipeCard = props => {
    // console.log(props.recipes);
    // const history = useHistory();
    // const { id } = useParams();
    // const routeChange = () => {     
    //     // <Route exact path="/recipedetails/:id" render={({match})=>(
    //     //     <RecipeDetails recipedetails={props.find(p => p.id === match.params.id)} />
    //     // )} />
    
    // let path = `/recipedetails`;
    // history.push(path);
    // }
    return(
        <div className="container">
        {/* {console.log(props)}   */}
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
                            
                            <li key={recipes.id}>
                                <Link to={`/recipedetails/${recipes.id}`}>{recipes[recipes.id]}Enter</Link>
                            </li>
                            
                            {/* <button className="recipe-buttons" onClick={routeChange}>                            
                                View Recipe
                            </button> */}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    )
}
    

export default RecipeCard;