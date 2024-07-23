import React, {useState} from 'react';

function Input({setInput, input, addInput}){
    return(
        <div className="input">
            <input type="text" placeholder="New To-do" value={input}
            onChange={(e) => setInput(e.target.value)}/>
            <button onClick={addInput}>ADD</button>
        </div>
    )
}

export default Input;