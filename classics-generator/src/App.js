// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

const books = 
['Don Quixote','War & Peace','Anna Karenina','Pride & Prejudice','Emma', 'The Jungle', 'Oil!', 'The Brothers Karamazov', 'The Idiot', 'Wuthering Heights', 'Persuasion', 'The Iliad', 'The Odyssey', 'The Aeneid', 'The Divine Comedy', 'The Scarlet Letter', 'Dead Souls', 'Boris Gunderov', 'For Whom the Bell Tolls', 'The Sun Also Rises', 'The Cather in the Rye', 'Slaughterhouse Five', 'Breakfast of Champions', 'Mother Night', 'The Waves', 'Mrs. Dalloway', 'To the Lighthouse', 'Housekeeping'];

function App() {
  const [book, setBook] = useState('');
  const buttonClick = () => setBook(books[Math.floor(Math.random() *  books.length)]);
  return (
    <div className="App">
    <div>
      <h1>Classics Generator</h1>
      <h3>Whatcha Gonna Get?</h3>
      <p>Click the button below:</p>
      <button onClick={buttonClick}>Generate</button>
      <h2>{book}</h2>
    </div>
    </div>
  )
 }

export default App;
