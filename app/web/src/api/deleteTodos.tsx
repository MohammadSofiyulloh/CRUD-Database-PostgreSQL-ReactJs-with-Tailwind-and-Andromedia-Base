import { api } from 'web-init'

export default api('/api/todos/delete', async ({ req, reply, db, ext }) => {
  if (req.query.id) {
    const deleteTodo = await db.todos.delete({
      where: {
        id: Number(req.query.id),
      },
    })
    console.log(deleteTodo)
    return reply.send(deleteTodo)
  }
})
