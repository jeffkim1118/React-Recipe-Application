import React from "react";

function SearchBar(){
  // const queryRequest = `https://api.spoonacular.com/food/products/search?query=pasta&apiKey=5c28e37ff52340769cc4e6978685e652`;
  // fetch(queryRequest)
  // .then((res) => res.json())
  // .then(data => console.log(data))
    return(
        <div className="SearchBar">
            <form>
                <label>
                    Search Your Desired Recipes!
                    <input type="text" name="Search"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default SearchBar;