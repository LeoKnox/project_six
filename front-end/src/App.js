import './App.css';
import Single from './single.js';
import {useEffect, useState} from 'react';
import React from 'react';

const loadRecord = (e) => {
  e.preventDefault();
}

function Record({myrecords = []}) {
  return (
    <>
    <h3>Records</h3>
    {myrecords.map((record, i) => (
      <>
        <p key={i}>
          <button onClick={loadRecord}>
            {record.record} +
          </button>
          </p>
        <Single id={i} />
      </>
    ))}
    </>
  )
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

  return (
      <div className="App">
        <header className="App-header">
          <h1>Display Records</h1>
          <Record myrecords={records[0]} />
        </header>
      </div>
  );
  }

export default App;