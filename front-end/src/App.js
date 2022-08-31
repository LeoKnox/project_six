import './App.css';
import Single from './single.js';
import {useEffect, useState} from 'react';
import React from 'react';

function App() {
  const [records, setRecord] = useState(null);

  function handleChange(data) {
    for (let i in data) {
      console.log(i + ":");
    }
    console.log(data.type);
  }

  function handleSubmit(data) {
    alert("submitted "+JSON.stringify(data));
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
     <form onSubmit={handleSubmit}>
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