import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function TodoForm({ createTodo }) {
    const [title, setTitle] = useState('')

    function handleOnClick() {
        let aTitle = title.trim()

        if (aTitle === '') {
            setTitle('')
            return
        }

        const todo = {
            id: uuidv4(),
            name: aTitle,
            done: false
        }

        createTodo(todo)
        setTitle('')
    }

    function handleOnChange(e) {
        setTitle(e.target.value)
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            handleOnClick()
        }
    }

    return (
        <div className='grid grid2'>
            <input onKeyDown={handleKeyDown} onChange={handleOnChange} className='ml6' value={title}
                placeholder=' Add a task to your todo list!' autoFocus id='todoInput' />
            <button onClick={handleOnClick}>Add</button>
        </div>
    )
}
