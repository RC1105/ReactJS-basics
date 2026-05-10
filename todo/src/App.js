import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

function App() {
  const [task,settask]=useState('');
  const [prio,setprio]=useState('');
  const [eta,seteta]=useState('');
  const [taskList,settasklist]=useState([]);
  return (
    <div className="App">
      <header className="App-header">
        Hey There!<br/> 
        What's the mood for today?<br/><br/>


        <input label="Priority" placeholder="Enter Priority" value={prio} onChange={(event)=>{
          setprio(event.target.value)
        }}></input>

        <input label="Task" placeholder="Enter Task" value={task} onChange={(event)=>{
          settask(event.target.value)
        }}></input>

        <input label="ETA" placeholder="Enter ETA" value={eta} onChange={(event)=>{
          seteta(event.target.value)
        }}></input>

        <button onClick={()=>{
          if(task==''|| task==undefined){
            alert("please enter task");
            return;
          }
          let vartask={'prio':prio,'task':task,'eta':eta};
          settasklist([...taskList,vartask].sort((a,b)=>{
            return parseInt(a.prio)>parseInt(b.prio)
          }));
          seteta('');
          setprio('');
          settask('');
        }}>Submit</button>
        <br/>

        <hr/>
        GAME PLAN<br/><br/>
        {taskList.length==0?"No Data Found":

        <table border="1">
          <thead>
            <tr>
              <th width="20%">Priority</th>
              <th width="50%">Task</th>
              <th width="20%">ETA</th>
              <th width="10%">Action</th>
            </tr>
          </thead>
            {taskList.map((item,key)=>(
              
          <tr>
              <td key={item.key}>{item.prio}</td>
              <td key={item.key}>{item.task}</td>
              <td key={item.key}>{item.eta}</td>
              
              <td key={key}><button onClick={()=>{
                settasklist(taskList.filter((item,index)=> index!=key));
              }}>Delete</button></td>
            
          </tr>
            ))}
        </table>
        }

      </header>
    </div>
  );
}

export default App;
