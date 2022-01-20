import React from "react";
import { useState } from "react";

function SearchBar(){
  
    const [query, setQuery] = useState("");
    // const [recipes, setRecipes] = useState([]);
    // const [alert, setAlert] = useState("");
    
    const queryRequest = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=5c28e37ff52340769cc4e6978685e652`;

    const getData = () => {
        if(query !== ""){
            fetch(queryRequest)
            .then((res) => res.json())
            .then(data => console.log(data))
            setQuery("");
        }
    }

    const onChange = e => setQuery(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        getData();
    }

    return(
        <div className="SearchBar">
            <form onSubmit={onSubmit}>
                <label>
                    Search Your Desired Recipes!                  
                </label>
                <input type="text" 
                    placeholder="Search" 
                    value={query}
                    onChange={onChange}
                />
                <input type="submit" value="Search" />
            </form>
            <div>
            </div>

        </div>
    )
}
export default SearchBar;