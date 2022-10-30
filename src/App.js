import './App.css';
import SearchBar from './components/SearchBar';
import React from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RecipeDetails from './components/RecipeDetails';
import CardContainer from './components/CardContainer';
import LikedRecipes from './components/LikedRecipes';
import TopBar from './components/TopBar';
import Landing from './components/Landing';


function App() {
  return (
    <div className="App">
      <TopBar />
      <Landing />
      <Switch>
          <Route path="/cardcontainer" component={CardContainer} />
          <Route exact path="/recipedetails/:id" component={RecipeDetails} />
          <Route exact path="/likedrecipes" component={LikedRecipes} />
          <Route exact={true} path="/" component={SearchBar} />
      </Switch>
    </div>
  );
}

export default App;
