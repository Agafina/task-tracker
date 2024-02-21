
import { useState } from 'react';
import './App.css';
import './index.css';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import Header from './Components/Header';


function App() {
 const [showAddTask , setShowAddTask] = useState(false)
 const [tasks, setTasks] = useState([
  {
    id:1,
    text:"Here is the man disturbing me since",
    day: 'March 8 232',
    reminder: false
  },
  {
    id:2,
    text:"Here is the man disturbing me since",
    day: 'Feb 8 232',
    reminder: true
  },
  {
    id:3,
    text:"men in the nile since",
    day: 'December 8 232',
    reminder: true
  },
  {
    id:4,
    text:"disturbing me since",
    day: 'Jan 34 232',
    reminder: false
  }
 ])

 const handleDelete = (id) =>{
   setTasks(tasks.filter((task) => task.id !== id))
 }
 const handleToggle = (id) =>{
   setTasks(
    tasks.map((task) => task.id === id ? {...task , reminder:!task.reminder}:task)
   )
 }
 const addTask = (task) => { 
   const id = Math.floor(Math.random() *10000) +1
   const newTask = {id , ...task}
   setTasks([...tasks , newTask])
 }
  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd ={showAddTask}/>
      {showAddTask && <AddTask  onAdd={addTask}/>}
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete ={handleDelete} onToggle={handleToggle}/> : 'No Task'}
    </div>

  );
}

export default App;
