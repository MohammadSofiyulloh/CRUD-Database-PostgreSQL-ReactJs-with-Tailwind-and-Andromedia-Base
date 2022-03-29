import { useState } from 'react'

const Header = ({ setRefresh }) => {
  const [title, setTitle] = useState('')

  // fungsi untuk menambah data todo melalui API ketika tombol "Add" di klik
  const addTodo = () => {
    const newTodo = { title, done: false }

    fetch('http://localhost:3200/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    }).then(() => {
      // ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string
      setTitle('')
      setRefresh(true)
    })
  }

  return (
    <div className="h-max max-w-full bg-blue-600 p-1">
      <h2 className="bg-green-500 text-white text-center max-w-2xl font-serif text-5xl shadow-xl font-medium m-auto mt-5 mb-5 p-5 border-gray-500 rounded-lg">
        Simple Todo App
      </h2>
      <div className="flex justify-start mt-3 mb-3">
        <input
          placeholder="Hari Ini Ngapain Aja?"
          type="text"
          value={title}
          className="pl-2 p-2 ml-5 border-2 border-orange-500 rounded-lg w-9/12 mr-14"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-300 rounded-md text-white text-xl px-3"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default Header
