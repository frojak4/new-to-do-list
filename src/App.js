import React, {useState} from 'react'
import './App.css';
import Input from './Input.jsx'
import Task from './Task.jsx';

function App() {

  const [input, setInput] = useState("");
  const [taskList, setTaskList] = useState([]);

  function addInput(){
    if (input !== ""){
    setTaskList(t => [...t, input])
    setInput("");
  }
  }

  function removeTask(index){
    const newList = taskList.filter((_, i) => i !== index);
    setTaskList(newList);
  }

  function moveTaskUp(index){
    if (index > 0){
      const newList = [...taskList];

      [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];;

      setTaskList(newList)
    }
  }

  function moveTaskDown(index){
    if (index < taskList.length -1){
      const newList = [...taskList];

      [newList[index + 1], newList[index]] = [newList[index], newList[index + 1]]

      setTaskList(newList);
    }
  }

  return (
    <div className="container">
      <h3>To Do List</h3>
      <Input setInput={setInput} input={input} addInput={addInput} />
      <div className="task-list">
        {taskList.map((task, index) => <Task key={index} name={task} index={index}
        removeTask={removeTask} moveTaskUp={moveTaskUp} moveTaskDown={moveTaskDown}/>)}
      </div>
    </div>
  );
}

export default App;
