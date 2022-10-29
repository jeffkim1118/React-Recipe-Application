import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
// import RecipeDetails from './components/RecipeDetails';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

