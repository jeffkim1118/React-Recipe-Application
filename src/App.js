import './App.css';
import SearchBar from './components/SearchBar';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RecipeDetails from './components/RecipeDetails';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/recipedetails/:id" component={RecipeDetails} />
          <Route exact={true} path="/" component={SearchBar} />
      </Switch>
    </div>
  );
}

export default App;
