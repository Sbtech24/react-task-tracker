import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from 'react'
import AddTasks from "./components/AddTask"

const App = () => {
  const[showAddTask,setShowAddTask]=useState(false)

  const[tasks,setTasks] = useState([
    {
        id:'1',
        text:'Doctors appointement',
        day:'Feb 5th at 2:30am',
        reminder:true,
    },
    {
        id:'2',
        text:'School appointement',
        day:'Feb 5th at 2:30am',
        reminder:true,
    },
    {
        id:'3',
        text:'food shopping',
        day:'Feb 4th at 2:30am',
        reminder: false,
    }
])

  //Add Task 
  const addTask =(task)=>{
    const id =Math.floor(Math.random()*1000)+1

    const newTask ={id,...task}
    setTasks([...tasks,newTask])
  }


  //Delete Task
  const deleteTask=(id)=>{
    console.log('delete',id)
    setTasks(tasks.filter((task)=> task.id !== id))
  }
  //Toggle Reminder
  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>task.id === id?{...task,reminder:!task.reminder}:task))
  }

  return (
    <div className="container">
    <Header onAdd={()=>setShowAddTask(!showAddTask)}showAdd={showAddTask}/>
{showAddTask && <AddTasks onAdd={addTask}/>}
   {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> :'No Tasks to show'}
    </div>
  );
}

export default App;
