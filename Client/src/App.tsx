import React, { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import { getTodos, addTodo, updateTodo, deleteTodo } from './API';

const App : React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos()
    }, []);

    const fetchTodos = (): void => {
        getTodos()
        .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
        .catch((err: Error) => console.log(err))
    }
}