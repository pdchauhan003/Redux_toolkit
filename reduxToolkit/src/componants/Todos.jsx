import { removeTodo } from "../features/todo/todoSlice";
import { useSelector,useDispatch } from "react-redux";
function Todos(){
    const todos= useSelector(state=>state.todos);
    const dispatch=useDispatch();
    return(
        <>
            <h3>Todos</h3>
            {
                todos.map((todo)=>(
                    <li key='todo.id'>{todo.text}
                    <button onClick={()=>dispatch(removeTodo(todo.id))}>delete</button></li>
                    
                ))
            }

        </>
    )
}
export default Todos;