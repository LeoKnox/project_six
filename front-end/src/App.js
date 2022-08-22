import './App.css';
import {useEffect, useState} from 'react';
import React from 'react';
import axios from 'axios';

function App() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  const [records, setRecord] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/record/api/`)
      .then(res => {
        const records = res.data;
        setRecord({ records })
      })
    console.log(records);
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <h1>Display Records</h1>
        </header>
      </div>
  );
  }

export default App;