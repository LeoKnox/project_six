import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [records, setRecord] = useState(null);
  
  useEffect(() => {
    fetch('http://127.0.0.1:8000/record/api/')
      .then(console.log("a"))
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