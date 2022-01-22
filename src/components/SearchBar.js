import React from "react";
import { useState, useEffect } from "react";
import Alert from "./Alert";
import RecipeCard from "./RecipeCard";
import RecipeDetails from "./RecipeDetails";

function SearchBar(){
  
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");
    
    const queryRequest = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=5c28e37ff52340769cc4e6978685e652`;

    const getData = () => {
        if(query !== ""){
            fetch(queryRequest)
            .then((res) => res.json())
            .then(data => setRecipes(data.results))
            setQuery("");
            setAlert("");
        }else{
            setAlert("Please fill the form");
        }
    }

    const onChange = (e) => {
        setQuery(e.target.value);
        useEffect(()=>{
            fetch("https://api.spoonacular.com/recipes/autocomplete?number=5")
            .then(res => res.json())
            .then(data => console.log(data.result.title))
        }, [])
    }

    const onSubmit = e => {
        e.preventDefault();
        getData();
    }

    return(
        <div className="SearchBar">
            <form onSubmit={onSubmit}>
            {alert !== "" && <Alert alert={alert} />}
                <label>
                    Search Your Recipes!                  
                </label>
                <br></br>
                <input type="text" 
                    placeholder="Search" 
                    value={query}
                    onChange={onChange}
                />
                <input type="submit" value="Search" />
            </form>
            <div>
                <RecipeCard recipes = {recipes} />
            </div>

        </div>
    )
}
export default SearchBar;