import { useEffect, useReducer } from "react";
import { todoReducer } from '../06-useReducer/todoReducer';

//realizamos este paso para que ni bien inicie nuestra app recupere los datos del LS
const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    //cuando agrego una tarea necesito un efecto secundario
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length
    }
}
