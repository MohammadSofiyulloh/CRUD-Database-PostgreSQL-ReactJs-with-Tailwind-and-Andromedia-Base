import { api } from 'web-init'

export default api('/api/todos/update', async ({ req, reply, db, ext }) => {
  if (req.query.id && req.body) {
    const { id } = req.query
    const { title, done } = req.body
    const putTodo = await db.todos.update({
      where: { id: Number(id) },
      data: { title, done },
    })
    reply.send(putTodo)
  }
})
