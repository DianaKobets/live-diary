import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem'; 
import InputField from './InputField';
import { addTodo} from '../store/todoSlice';
import { useState } from 'react';

const TodoList = () =>{
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addTodo({text}))
        setText('');
    };

    const todos = useSelector(state => state.todos.todos);

    return (
        <>
            <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
             
            <ul>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo} 
                    />
                ))}
            </ul>
        </>
    );
};

export default TodoList;