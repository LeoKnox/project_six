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
        fetch(
          `http://127.0.0.1:8000/record/api/`
        )
          .then((response) => response.json())
          .then(setRecord)
          .catch((err) => {
            console.log(err.message);
          })
      }, []);
    console.log(records);

  return (
      <div className="App">
        <header className="App-header">
          <h1>Display Records</h1>
          {records.map(record => <Single record={record} />)}
        </header>
      </div>
  );
  }

export default App;