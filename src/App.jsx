import { useState, useEffect } from 'react'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'

function App() {
  const [todoList, setTodoList] = useState(unserializeList())

  useEffect(() => {
    serializeList(todoList)
  }, [todoList])

  function createTodo(todo) {
    setTodoList([...todoList, todo])
  }

  function setDone(id) {
    setTodoList(prevTodoList => {
      return prevTodoList.map(todo => {

        if (todo.id === id) {
          let done = !todo.done

          return { ...todo, done }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodoList(prevTodoList => {
      return prevTodoList.filter(todo => todo.id !== id)
    })
  }

  function serializeList(todoList) {
    localStorage.setItem('AppTodo', JSON.stringify(todoList));
  }

  function unserializeList() {
    let list = JSON.parse(localStorage.getItem('AppTodo'));

    if (list === null) {
      list = []
    }

    return list
  }

  return (
    <div className='app_c center'>
      <h1 className='ml6'>Todo List</h1>
      <TodoForm createTodo={createTodo} />

      <TodoList todoList={todoList} setDone={setDone} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
