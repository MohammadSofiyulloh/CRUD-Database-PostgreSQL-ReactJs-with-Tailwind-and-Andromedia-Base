import { useEffect, useState } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ isRefresh, setRefresh }) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    // memanggil API untuk mengambil data todos
    if (isRefresh) {
      fetch('http://localhost:3200/api/todos')
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setRefresh(false)
          // ketika Rest API sukses, simpan data dari response ke dalam state lokal
          setTodos(data)
        })
        .catch((err) => {
          setRefresh(false)
          if (err.name === 'AbortError') {
            console.log('fetch aborted.')
          }
        })
    }
  }, [isRefresh, setRefresh])

  return (
    <ul
      id="todo-list"
      className="grid justify-items-start w-11/12 bg-white text-center mb-3 m-5 rounded-xl p-3"
    >
      {todos.map((todo, i) => (
        <TodoItem key={i} todo={todo} setRefresh={setRefresh} />
      ))}
    </ul>
  )
}

export default TodoList
