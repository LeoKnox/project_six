import './App.css';
import Single from './single.js';
import {useEffect, useState} from 'react';
import React from 'react';

const loadRecord = (e) => {
  e.preventDefault();
}

function App() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  const [records, setRecord] = useState(null);

  useEffect(() => {
    async () => {
      try {
        const response = await fetch(
          'http://127.0.0.1:8000/record/api/'
        );
        setRecord (await response.json());
      } catch (error) {
        console.error(errror)
      }
    }
    console.log(records);

  return (
      <div className="App">
        <header className="App-header">
          <h1>Display Records</h1>
          {records.map(r => <p>{r}</p>)}
        </header>
      </div>
  );
  }

export default App;