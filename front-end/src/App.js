import './App.css';
import './single.js';
import {useEffect, useState} from 'react';
import React from 'react';

function Record({myrecords = []}) {
  return (
    <>
    <h3>Records</h3>
    {myrecords.map((record, i) => (
      <p key={i}>{record.record} +</p>
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
          .then(setRecord);
      }, []);

  return (
      <div className="App">
        <header className="App-header">
          <h1>Display Records</h1>
          <Record myrecords={records} />
        </header>
      </div>
  );
  }

export default App;