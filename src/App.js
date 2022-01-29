import './App.css';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RecipeDetails from './components/RecipeDetails';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/recipedetails">
             <RecipeDetails />
          </Route>
          <Route exact={true} path="/" component={SearchBar} />
      </Switch>
    </div>
  );
}

export default App;
