import logo from './logo.svg';
import './App.css';
import './index2.css';
import BTNmodule from './button.module.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useState } from 'react';
import { faList } from '@fortawesome/free-solid-svg-icons';
import {tabs} from'./objectFOLDER/tab.jsx';



function App() {
  <NotificationContainer/>
  let[todolist,setTodolist]=useState([]);
  let saveToDoList=(event)=>{
    let todoname=event.target.todoname.value;
    if(!todolist.includes(todoname)){
      let finalTodoList=[...todolist,todoname];
      setTodolist(finalTodoList);
      //todoname=event.target.todoname.value="";//i have added this to clear input box
    }
    else{
     NotificationManager.warning(` ${todoname} already exist`,'WARNING');
    }
   //s alert(todoname);
   todoname=event.target.todoname.value="";
    event.preventDefault();
  }
  let list=todolist.map((value,index)=>{
    console.log(value,index,todolist)
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} todolist={todolist} setTodolist={setTodolist}/>
    )
  })
  let[tab,setTab]=useState(0)
  let[tabcontent,setTabcontent]=useState()
  let changetab=(valueItems,index)=>{
    setTab(index);
    
    //alert(index);
  }
  return (
    <div className="app">
      <NotificationContainer/>
      <div className='outerdiv'>
        <h1 style={{textAlign:'center'}}>Some Ideas About Here </h1>
        <ul>
          {tabs.map((valueItems,index)=>{
            return(<li><button className={(tab==index)?'clickBTN':''} onClick={()=>changetab(valueItems,index)}>{valueItems.title}</button></li>)
          })}
        </ul>
        {(tabs[tab]!==undefined)
        ?
        <p className='paragraph'>{tabs[tab].discription}</p>
         :
        ''
        }
    
      </div>



    





      <div className='box'><h1>TODO LIST</h1>
      <form onSubmit={saveToDoList}>
        <input type='text' name='todoname'/><button className={BTNmodule.button}>save</button>
      </form>
      <div className='outerDiv'>
        <ul>
        {list}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default App;


function ToDoListItems({value,indexNumber,todolist,setTodolist}){
let[cross,setCross]=useState(false)
let deleteRow=()=>{
  let finalTodoList=todolist.filter((v,i)=>i!=indexNumber);
  setTodolist(finalTodoList)
}
  return(
 <li onClick={()=>setCross(!cross)} className={(cross)?'complete':''}>{value}<span onClick={deleteRow}>&times;</span></li>
  )
}


