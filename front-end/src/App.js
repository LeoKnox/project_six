import './App.css';
import Single from './single.js';
import {useEffect, useState} from 'react';
import React from 'react';

function App() {
  const [records, setRecord] = useState(null);

  function handleChange(data) {
    console.log(data.target.value);
  }

  function handleSubmit(data) {
    fetch(`http://127.0.0.1:8000/record/api/`, {
      method: 'POST',
      body: JSON.stringify({ data })
    })
    alert(data.target.value);
  }

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/record/api/`)
      .then(response => response.json())
      .then(setRecord)
      .catch(console.error)
  }, [])
  if (records)
    return (
    <>
    {records.map(x => (
      <Single record={x.record} />)
     )}
     <form onSubmit={handleSubmit} method="POST">
       <label>
         Record:
         <input type="text" onChange={handleChange} />
       </label>
       <input type="submit" value="Submit" />
     </form>
     </>)
  return <h1> No Record</h1>
}


export default App;