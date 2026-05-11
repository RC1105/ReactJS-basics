import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [chars,setchars]= useState("");
  const [charcount,setcharcount]= useState(0);
  return (
    <div className="App">
      <header className="App-header">
        {charcount>100?'LIMIT EXCEEDED':charcount}
        <label>Enter Input</label>
        <input value={chars} onChange={(event)=>{
          setchars(event.target.value);
          setcharcount(event.target.value.length);
        }}></input>
      </header>
    </div>
  );
}

export default App;
