import './App.css';
import Single from './single.js';
import {useEffect, useState} from 'react';
import React from 'react';

function ShowRecord() {
  return (
    <div>
      <h1>Show Records</h1>
    </div>
  )
}
function App() {
  const [records, setRecord] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/record/api/`)
      .then(response => response.json())
      .then(setRecord)
      .catch(console.error)
  }, [])
  if (records)
    return records.map(x => (<Single item={x} />))
  return <h1> No Record</h1>
}


export default App;