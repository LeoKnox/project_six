import './App.css';
import {useEffect, useState} from 'react';
import React from 'react';

function Record(records) {
  for (let r = 0; r < records.length; r++) {
    <p>{records[r].record}</p>
  }
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
      if (records)
        return (
          <Record records={records} />
        )

  return (
      <div className="App">
        <header className="App-header">
          <h1>Display Records</h1>
        </header>
      </div>
  );
  }

export default App;