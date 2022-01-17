import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  // const queryRequest = `https://api.spoonacular.com/food/products/search?query=pasta&apiKey=5c28e37ff52340769cc4e6978685e652`;
  // fetch(queryRequest)
  // .then((res) => res.json())
  // .then(data => console.log(data))
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
