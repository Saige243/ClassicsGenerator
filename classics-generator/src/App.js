import logo from './logo.svg';
import './App.css';

const books = 
['Don Quixote','War & Peace','Anna Karenina','Pride & Predjudice','Emma']

function App() {
  return (
    <div className="App">
    <div>
      <h1>Classics Generator</h1>
      <h3>Whatcha Gonna Get?</h3>
      <p>Click the button below:</p>
      <button onClick={GenerateBook}>Generate</button>
      <h2></h2>
    </div>
    </div>
  )
 }
  
function GenerateBook(){
  const randomElement = books[Math.floor(Math.random() *         books.length)];
  return console.log(randomElement);
}


export default App;
