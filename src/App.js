import './App.css';

function App() {
  const queryRequest = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2`;
  fetch(queryRequest)
  .then((res) => res.json())
  .then(data => console.log(data))
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
