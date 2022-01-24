import './App.css';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  const[resp, setRandResp] = useState(null);

  // useEffect(()=>{
  //   const getData = () => fetch("https://api.spoonacular.com/recipes/random?number=5&apiKey=5c28e37ff52340769cc4e6978685e652")
  //   .then(res => res.json())
  //   .data(data => setRandResp(data))
  // }, []);

  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
