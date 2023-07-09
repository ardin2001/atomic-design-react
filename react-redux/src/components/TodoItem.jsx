const TodoItem = ({id,text,complete,toggleTodo,deleteTodo}) =>{
    return(
        <div>
            <p className={complete ? "text-green-500" : "text-red-600"}>{text}</p>
            <button className="bg-red-500 px-3 py-1" onClick={() => deleteTodo(id)}>delete</button>
            <button className="bg-green-500 px-3 py-1" onClick={() => toggleTodo(id,!complete)}>complete</button>
        </div>
    )
}

export default TodoItem;