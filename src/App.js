import './App.css';
import {useState} from "react";

function App() {
  const [newTask, setNewTask] = useState("")
  const [todoList, setTodoList] = useState([])

  const handelChange = (event) => {
    setNewTask(event.target.value)
  }

  const  addNewEvent = () => {
  //   if (!newTask.text || /^\s*$/.test(newTask.text)) {
  //     return
  // }

    const task={
      id: Math.floor(Math.random() * 10000),
      taskName: newTask
    }
    setTodoList([...todoList, task])
    setNewTask("")
  }
  return (
    <div className="App">
    <input onChange={handelChange}  value={newTask}/>
    <button onClick={addNewEvent}>Add a event</button>
    {todoList.map((task, key)=> {
      return (
        <div key={task.id}>
          {task.taskName}
          <button>x</button>
        </div>
      )
    })}
    </div>
  );
}

export default App;
