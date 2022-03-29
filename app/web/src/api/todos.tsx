import { api } from 'web-init'

export default api('/api/todos', async ({ req, reply, db, ext }) => {
  const getTodo = await db.todos.findMany({
    orderBy: {
      id: 'asc',
    },
  })
  reply.status(200).send(getTodo)

  console.log(`tes query: ${req.query.id}`)

  const postTodo = await db.todos.create({
    data: { ...req.body },
  })
  reply.send(postTodo)
})
