import './App.css';
import Single from './single.js';
import {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  const [records, setRecord] = useState(null);

  function handleChange(data) {
    console.log(data.target.value);
  }

  function handleSubmit(data) {
    data = {"record":"sixth"};
    fetch(`http://127.0.0.1:8000/record/api`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Acess-Control-Allow-Origin':"http://127.0.0.1:8000/"},
      credentials: 'same-origin',
      body: data,
      mode: 'cors'
    })
      .then(response => response.json())
      .catch(console.error);
    alert(data.target.value);
  }

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/record/api/`)
      .then(response => response.json())
      .then(setRecord)
      .then(console.log(records + "@@@"))
      .catch(console.error)
  }, [])
  if (records)
    return (
    <>
    <h1>Records</h1>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Single record={records} />} />
     </Routes>
     </BrowserRouter>
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