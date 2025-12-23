import { useDispatch } from 'react-redux';
import React,{useState} from 'react';
import { addTodo } from '../features/todo/todoSlice';

function AddTodos(){
    const[input,setInput]=useState('');
    const dispatch=useDispatch()
    const addTodoHandeler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
    return(
        <>
            <h2>Add Todos</h2>
            <form onSubmit={addTodoHandeler}>
                <input type='text' value={input} name='input' onChange={(e)=>setInput(e.target.value)}/>
                <br/>
                <input type='submit'/>
            </form>
        </>
    )
}
export default AddTodos;