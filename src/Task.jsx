import React from 'react';


function Task({name, index, removeTask, moveTaskUp, moveTaskDown}){
    return(
        <div className="task">
            <h3>{index + 1}. {name}</h3>
            <div className="buttons">
                <button onClick={() => removeTask(index)}>🗑</button>
                <button onClick={() => moveTaskUp(index)}>↑</button>
                <button onClick={() => moveTaskDown(index)}>↓</button>
            </div>
        </div>
    )
}

export default Task;