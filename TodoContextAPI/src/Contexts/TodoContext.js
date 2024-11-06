import {createContext, useContext} from 'react'
export const TodoContext = createContext({
    todos:[{
        id:1,
        todo:"",
        completed:false,
    },
   ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    completeTodo:(id)=>{}
});
// create hooks 
export  function useTodo(){
    return useContext(TodoContext)
}
// context provider
export const TodoProvider=TodoContext.Provider;