import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import Alert from "./Alert";
import RecipeCard from "./RecipeCard";

function SearchBar(){
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
    
    const queryRequest = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=5c28e37ff52340769cc4e6978685e652`;

    const getData = () => {
        if(query !== ""){
            fetch(queryRequest)
            .then(res => res.json())
            .then(data => setRecipes(data.results))
            setQuery("");
            setAlert("");
        }else{
            // If the user doesn't submit any text into the input, it creates an alert.
            setAlert("Please fill the form");
        }
    }

    const onChange = (e) => {
        // e.preventDefault();
        setQuery(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        getData();
    }

    return(
        <div className="SearchBar">
            <form className= "SearchForm" onSubmit={onSubmit}>
                <label>
                    Search Your Recipes!                  
                </label>
                <br/>
                <Link to='/LikedRecipes'>View my favorite Recipes!</Link>
                <br/><br/>
                <input type="text"
                    className="input-text"
                    placeholder="Search" 
                    value={query}
                    onChange={onChange}
                />
                <input className="submitBtn" type="submit" value="Search" />
                {alert !== "" && <Alert alert={alert} />}
            </form>
            
            <div>
                {/* Pass recipes data as a prop to RecipeCard component */}
                <RecipeCard recipes = {recipes} />
            </div>

        </div>
    )
}
export default SearchBar;