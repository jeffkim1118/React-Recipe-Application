import React from "react";

function SearchBar(){
  // const queryRequest = `https://api.spoonacular.com/food/products/search?query=${query}&apiKey=5c28e37ff52340769cc4e6978685e652`;
  // fetch(queryRequest)
  // .then((res) => res.json())
  // .then(data => console.log(data))

    const [query, setquery] = useState("");
    const [recipes, setrecipes] = useState("");

    return(
        <div className="SearchBar">
            <form>
                <label>
                    Search Your Desired Recipes!                  
                </label>
                <input type="text" 
                    placeholder="Search" 
                    value={query} 
                    onChange={(e)=>setquery(e.target.value)}  
                />
                <input type="submit" value="Submit" />
            </form>
            <div>

            </div>

        </div>
    )
}
export default SearchBar;