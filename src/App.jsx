import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [someData, setSomeData] = useState([]);
  const fetchData = async (url) => {
    const response = await fetch(url, {
      method: 'GET',
    });
    return response.json();
  };
  useEffect(() => {
    fetchData('http://localhost:8000/api/users/0').then((data) => {
      setSomeData(data);
    });
  }, []);
  console.log(someData);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
