
export default function Todo({ todo, setDone, deleteTodo }) {

    let classes = 'text_wrap'

    if (todo.done) {
        classes += ' done'
    }

    return (
        <div className='grid grid1'>
            <input onChange={() => setDone(todo.id)} type="checkbox" checked={todo.done} name="taskDone" />
            <span className={classes}>{todo.name}</span>
            <button onClick={() => deleteTodo(todo.id)} className='btn_d text_center'>x</button>
        </div>
    )

}
