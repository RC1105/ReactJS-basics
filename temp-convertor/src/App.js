import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function fx(val,type){
  if(type=='C'){
    return (val*1.8)+32;
  }
  if(type=='F'){
    return (val-32)/1.8;
  }
}
function App() {
  const [tmpC, settmpc]=useState(0);
  const [tmpF, settmpf]=useState(0);
  const [no, setno]=useState('');
  const [lst, setlst]=useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <b>TEMPERATURE CONVERTOR</b><br/>
        <label>Celsius</label>
        <input label="Temperature (in C)" value={tmpC} onChange={(event)=>{
          settmpc(event.target.value)
          var f=fx(event.target.value,'C');
          settmpf(f);
        }}></input>


        <label>Fahrenheit</label>
        <input label="Temperature (in F)" value={tmpF} onChange={(event)=>{
          settmpf(event.target.value)
          var c=fx(event.target.value,'F');
          settmpc(c);
        }}></input>
        <br/>
        Celsius - {tmpC}  Fahrenheit - {tmpF}
        <hr/>
        <hr/>
        <br/>
        <b>NUMBER SORTER</b><br/>
        <div className="frame">
          <table>
            <tr>
        {lst.map((items,key)=>(
          <td key={key}>{items}</td>
        ))}
            </tr>
        </table>
        </div><br/>
        <label>Number</label>
        <input label="Number" value={no} onChange={(event)=>{
            setno(event.target.value)
          }}></input>
        <button onClick={()=>{
          if(!lst.includes(no)){

            var ls=[...lst,no].sort((a,b)=>{
              return parseInt(a)>parseInt(b);
            });
            setlst(ls);
          }
          setno('');
        }}>Submit</button>
      </header>
    </div>
  );
}

export default App;
