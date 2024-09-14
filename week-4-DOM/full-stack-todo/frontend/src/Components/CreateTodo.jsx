
import { useState } from "react";


export function CreateTodo() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    return <div>
        <input id='title' type='text' placeholder='title' onChange={function(e){
            const value=e.target.value;
            setTitle(value);
        }}></input><br/>
        <input id='description' type='text' placeholder='description' onChange={function(e){
            const value=e.target.value;
            setDescription(value);
        }}></input><br/>

        <button onClick={function(){
            fetch('http://localhost:3000/todo',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    title:title,
                    description:description
                })
            })
            .then(async function(response){
                const data=await response.json();
                alert('Todo created');
            })
        }}>Add a todo</button>
    </div>
}