import React,{useState} from "react";
import styles from './to-do-list.module.css';

function Todolist(){
    
    const [todoThings,settodoThing] = useState([]);


    function handleAddtodothing(){
        const newTask = document.getElementById("inputTask").value;
        document.getElementById("inputTask").value="";

        settodoThing(t => [...t,newTask])

    }

    function handleRemoveTask(index){
        settodoThing(t => t.filter((_,i) => i !== index));
    }

    function moveTaskup(index){
        if(index > 0){
            const updatedTasks =[...todoThings];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            settodoThing(updatedTasks);
        }

    }

    function moveTaskdown(index){
        if(index < todoThings.length -1){
            const updatedTasks =[...todoThings];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            settodoThing(updatedTasks);
        }

    }
    return(
        <>
            <div className={styles.todolistdisplay}>
                <h1>To-Do-List</h1>
                <input type="text" id="inputTask" placeholder="Enter a task..."/>
                <button className={styles.addBtn} onClick={handleAddtodothing}>Add</button>
                <ul>
                    {todoThings.map((task,index) => <li key={index}>
                            <span className={styles.text}>{task}</span>
                            <button className={styles.deleteBtn} onClick={() => handleRemoveTask(index)}>Delete</button>
                            <button className={styles.moveBtn} onClick={() => moveTaskup(index)}>👆</button>
                            <button className={styles.moveBtn} onClick={() => moveTaskdown(index)}>👇</button>
                     </li>)}
                </ul>

            </div>
        
        </>
    )
}

export default Todolist