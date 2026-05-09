import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [cnt, setcnt]=useState(0);
  const [blnDarkMode, setMode]=useState(true)
  return (
    <div className="App">
      <header className={blnDarkMode?"App-header":"App-header-inv"}>
        <div className={blnDarkMode?"screen":"screen-inv"}>{cnt<=0? "ZERO":cnt}</div>
        <div className="buttons">
          
          <button className="button" onClick={()=>{
            setcnt(cnt-1)
          }}>-</button>

          <button className="button" onClick={()=>{
            setcnt(cnt+1)
          }}>+</button>
          
        </div>


          <button className="button" onClick={()=>{
            setcnt(0)
          }}>Reset</button>

          <footer className={blnDarkMode?"footer":"footer-inv"}>
            <div className='moder' onClick={()=>{
              setMode(!blnDarkMode)
            }}>Switch to {!blnDarkMode? "Dark":"Light"} Mode</div><br/>
            <div>Made with &lt;3 by RC11</div>
          </footer>
      </header>
    </div>
  );
}

export default App;
