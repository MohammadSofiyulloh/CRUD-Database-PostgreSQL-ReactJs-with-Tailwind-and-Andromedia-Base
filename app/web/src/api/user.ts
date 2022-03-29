import { api } from 'web-init'

export default api('/api/user', async ({ req, reply, db, ext }) => {
  // req untuk request query atau body
  // replay digunakan untuk response
  // db untuk prisma
  // ext digunakan untuk integrasi dengan app/ext. depedency yang hanya bisa di jalankan di backend (bukan frontend)

  // contoh jika ingin menggunakan prisma. tinggal disesuaikan saja dengan tabel yang ada pada schema.prisma
  // const res = await db.albums.findMany()

  reply.send({ status: 'OK' })
})
