import '../css/main.css'
import Todo from './Todo'

export default function TodoList({ todoList, setDone, deleteTodo }) {

  return (
    <div className='list_c'>
      {todoList.map((todo) => {
        return <Todo key={todo.id} todo={todo} setDone={setDone} deleteTodo={deleteTodo} />
      })}
    </div>
  )
}
