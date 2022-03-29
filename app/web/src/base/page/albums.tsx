import { api } from 'src/utils/api'
import { useEffect } from 'types/react'
import { page } from 'web-init'
import { useLocal } from 'web-utils'

export default page({
  // : pada url digunakan sebagai parameter yang sifatnya dinamis. bisa juga ditambahkan tanda tanya jika parameter tersebut sifatnya tidak wajib ada
  url: '/albums/:id?',
  // layout bisa menyesuaikan dengan layout yang digunakan
  layout: 'blank',
  component: ({}) => {
    // selain uselocal bisa juga menggunakan usestate jika ingin menggunakan helper bawaan react js
    const local = useLocal(
      {
        albums: [] as any[],
        loading: false,
      },
      async () => {
        local.loading = true
        // local render digunakan agar value dapat terender ulang pada element html
        local.render()

        // contoh jika ingin menggunakan prisma. tinggal disesuaikan saja dengan tabel yang ada pada schema.prisma
        // local.album = await db.albums.findMany({
        //   include: {
        //     artists: {
        //       include: {
        //         countries: true,
        //       },
        //     },
        //   },
        // })

        // jika ingin menggunkan api bisa juga memakai helper api atau bisa buat sendiri menggunakan axios atau fetch
        // const res = await api('/api/user', {
        //   id: 1,
        // })

        setTimeout(() => {
          local.loading = false
          local.render()
        }, 200)
      }
    )

    return (
      <>
        <>Ini albums page</>

        {local.loading && <>Loading</>}
        {local.albums.map((el, i) => (
          <div key={i}>{el.Title}</div>
        ))}
      </>
    )
  },
})
