import React, { useEffect, useState } from 'react'
import { fetchMessages } from '../../lib/data'
import { signOut, getSession, useSession } from 'next-auth/react'

import MainLayout from './../../layout/MainLayout'
import Logo from './../../components/Logo'
import ProductBox from '../../components/ProuductBox'
import Form from './../../components/Form'

import { useRouter } from 'next/router'

const Admin = ({ data }) => {
  const { data: session, status } = useSession()

  const [accountTab, setAccountTab] = useState(0)

  const router = useRouter()

  useEffect(() => {}, [])

  const handleSignOut = async () => {
    router.replace('/')
    await signOut({ redirect: false })
  }

  return (
    <MainLayout>
      <Logo />
      <div className='admin'>
        <div className='profileH'>
          {/* <h1>{session && session.user.name}</h1> */}
          <h1>Admin</h1>
          <h4>{session && session.user.email}</h4>
        </div>

        {/* Prvo resenje */}
        <div className='account-tab'>
          <h3
            onClick={() => setAccountTab(0)}
            className={accountTab === 0 ? 'active-tab' : ''}
          >
            Dodajte proizvod
          </h3>
          <h3
            onClick={() => setAccountTab(1)}
            className={accountTab === 1 ? 'active-tab' : ''}
          >
            Poruke
          </h3>
          <h3 onClick={() => handleSignOut()}>Izlogujte se</h3>
        </div>

        {accountTab === 0 && <AddForm />}
      </div>
    </MainLayout>
  )
}

const AddForm = () => {
  return (
    <div className='add-product-form'>
      <label>Ime proizvoda</label>
      <input
        type='text'
        placeholder='Primer: Solis 60'
        required
        className='inputLabel'
      />

      <label>Kategorija proizvoda</label>
      <input
        type='text'
        placeholder='Primer: traktori / stocarstvo / ratarstvo (obavezno malim slovima)'
        required
        className='inputLabel'
      />

      <label>Podkategorija proizvoda</label>
      <input
        type='email'
        placeholder='Primer: solis / balirke / motalice (obavezno malim slovima)'
        required
        className='inputLabel'
      />

      <label>Link Proizvoda</label>
      <input
        type='text'
        placeholder='Primer: solis-60 (obavezno malim slovima i odvajanje reci - linijom)'
        required
        className='inputLabel'
      />

      <label>Slika Proizvoda</label>
      <input
        type='text'
        placeholder='Slika je link koji dolazi sa oficijalne stranice proizvoda koji se ubacuje'
        required
        className='inputLabel'
      />

      <label>Opis Proizvoda</label>
      <input
        type='text'
        placeholder='Opis proizvoda u najkracim crtama'
        required
        className='inputLabel'
      />

      <label>Veci opis Proizvoda</label>
      <input
        type='text'
        placeholder='Opis proizvoda'
        required
        className='inputLabel'
      />

      <label>Kljucne reci proizvoda</label>
      <input
        type='text'
        placeholder='Uneti 5-6 kljucne reci proizvoda (ime, kategoriju, podkategoriju) i odvajati zarezom!'
        required
        className='inputLabel'
      />

      <button>Dodajte proizvod</button>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req })
  const response = await fetchMessages()
  const data = JSON.parse(JSON.stringify(response))

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      data,
    },
  }
}
export default Admin
