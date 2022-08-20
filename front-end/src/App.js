import './App.css';
import {useEffect, useState} from "react";

function App() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  const [records, setRecord] = useState(null);

  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
      credentials: "include"
 };
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/record/api/',requestOptions)
      .then((response) => response.json())
      .then(setRecord);
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