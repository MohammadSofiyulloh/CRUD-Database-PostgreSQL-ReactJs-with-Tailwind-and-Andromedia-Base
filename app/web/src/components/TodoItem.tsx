const TodoItem = ({ todo, setRefresh }) => {
  const updateTodo = () => {
    todo.done = !todo.done

    fetch(`http://localhost:3200/api/todos/update?id=${todo.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).then(() => {
      setRefresh(true)
    })
  }

  const deleteTodo = () => {
    fetch(`http://localhost:3200/api/todos/delete?id=${todo.id}`, {
      method: 'GET',
    }).then(() => {
      setRefresh(true)
    })
  }

  return (
    <li
      className={`flex w-11/12 p-3 mb-3 justify-between items-center bg-amber-300 hover:bg-green-500 rounded-xl font-serif font-semibold text-lg mt-1 ${
        todo.done ? 'line-through bg-orange-300 rounded-xl' : ''
      }`}
    >
      <div onClick={updateTodo}>{todo.title}</div>
      <span
        className="flex justify-between space-x-5 bg-red-600 text-white font-medium px-2 py-1 rounded-lg hover:bg-red-800"
        onClick={deleteTodo}
      >
        Remove
      </span>
    </li>
  )
}

export default TodoItem
