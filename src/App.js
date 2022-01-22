import './App.css';
import SearchBar from './components/SearchBar';
import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  const[resp, setRandResp] = useState(null);
  useEffect(()=>{
    getData();

    const getData = () => fetch("https://api.spoonacular.com/recipes/random?number=10&apiKey=5c28e37ff52340769cc4e6978685e652")
    .then(res => res.json())
    .data(data => setRandResp(data))
  }, [])

  return (
    <div className="App">
      <SearchBar />

      <div className="random-recipes">
        {resp.map((recip, index) => (
          <div key={index}>
            <h2>{recip.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
