import { useState } from "react";
import './style.css'


function Todo(){
   
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([]);
    const [completed, setCompleted] = useState(false);

    const handleSubmit = (e)=> {
        e.preventDefault();
        setTask()
    }
    const setTask = () => {
        if (inputValue.trim()) {
            
            setTasks([...tasks, { name: inputValue, completed }]);
            setInputValue('');
            setCompleted(false);
        }
    };
    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
      };
    
    return(
        <>
         <form onSubmit={handleSubmit}>
            <label>todo Name</label>
            <input type="text" placeholder="Enter your todo"
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
             style={{height:"30px", textAlign:"center", outline: "none"}}
             />
            <input type="checkbox" 
            checked={completed}
            onChange={() => setCompleted(!completed)}
            />
            <button onClick={setTask}>Add Task</button>

         </form>
         <table className="task-table">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <tr key={index}>
                        <td>{task.name}</td>
                       { <td>
                       { task.completed ? "Completed" : "UnCompleted"}
                        </td>}
                        <td>
                            <button onClick={() => removeTask(index)}>Remove Task</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        </>
    )
}
export default Todo;