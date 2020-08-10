import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Everyone!</h1>
      <p>Welcome to the blank website!</p>
      <span>{process.env.REACT_APP_MYKEY}</span>
    </div>
  );
}

export default App;
