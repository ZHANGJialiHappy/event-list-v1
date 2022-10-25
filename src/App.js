import './App.css';
import { useState } from "react";

function App() {
  const [newTask, setNewTask] = useState("")
  const [todoList, setTodoList] = useState([])

  const handelChange = (event) => {
    setNewTask(event.target.value)
  }

  const addNewEvent = (event) => {
    const task = {
      id: Math.floor(Math.random() * 10000),
      taskName: newTask
    }
    if (!newTask || /^\s*$/.test(newTask)) {
      return
    }
    setTodoList([task, ...todoList])
    setNewTask("")
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  return (
    <div className="App">
      <input onChange={handelChange} value={newTask} />
      <button onClick={addNewEvent}>Add a event</button>
      {todoList.map((task, key) => {
        return (
          <div key={task.id}>
            {task.taskName}
            <button onClick={() => deleteTask(task.id)}>x</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
