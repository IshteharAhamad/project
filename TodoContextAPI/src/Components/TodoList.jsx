import React,{useState} from "react";
import { useTodo } from "../Contexts";
function TodoList({ todo }) {
    const [isTodoeditable, setIsTodoeditable] = useState(false);
    const [todoMessage, setTodoMessage] = useState(todo.todo);
    const {updateTodo,deleteTodo,completeTodo}=useTodo();
    const EditTodo= ()=>{
        updateTodo(todo.id,{...todo,todo:todoMessage})
        setIsTodoeditable(false)
    }
    const completedTodo=()=>{
        completeTodo(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#d1fa62]" : "bg-[#f1ebf6]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={completedTodo}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoeditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMessage}
                onChange={(e) => setTodoMessage(e.target.value)}
                readOnly={!isTodoeditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoeditable) {
                        EditTodo();
                    } else setIsTodoeditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoeditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoList;
