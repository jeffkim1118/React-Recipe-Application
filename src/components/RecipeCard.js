import React from "react";
import { Link } from "react-router-dom";
import CardContainer from "./CardContainer";
import "../App.css";

const RecipeCard = props => { 
    return(
        <div className="container">
        <div className="row">
            {/* Destructuring using .map method to display individual recipes on the screen */}
            {props.recipes.map((recipes)=>{
                return(
                    <div key={recipes.title}>
                        <CardContainer recipe = {recipes} />
                    </div>                 
                )
            })}
        </div>
    </div>
    )
}
    

export default RecipeCard;