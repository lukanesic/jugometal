import React, { useEffect, useState } from 'react'
import { signOut, getSession, useSession } from 'next-auth/react'

import MainLayout from './../../layout/MainLayout'
import Logo from './../../components/Logo'
import AddForm from './../../components/AddForm'

import { useRouter } from 'next/router'
import Message from '../../components/Message'
import RecievedOrder from '../../components/RecievedOrder'

const Admin = () => {
  const { data: session, status } = useSession()

  const [accountTab, setAccountTab] = useState(0)

  const [messages, setMessages] = useState()
  const [orders, setOrders] = useState()
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    const fetchMessages = async () => {
      const request = await fetch('/api/inquire/all')
      const response = await request.json()
      setMessages(response)
      setLoading(false)
    }

    fetchMessages()
  }, [])

  useEffect(() => {
    const fetchOrders = async () => {
      const request = await fetch('/api/order/all')
      const response = await request.json()
      setOrders(response)
      setLoading(false)
    }

    fetchOrders()
  }, [])

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
          {/* <h4>{session && session.user.email}</h4> */}
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
            Porudžbine
          </h3>
          <h3
            onClick={() => setAccountTab(2)}
            className={accountTab === 2 ? 'active-tab' : ''}
          >
            Poruke
          </h3>
          <h3 onClick={() => handleSignOut()}>Izlogujte se</h3>
        </div>

        {accountTab === 0 && <AddForm />}

        {/* Map kroz njih */}
        {accountTab === 1 && (
          <>
            {orders && Object.keys(orders).length === 0 && (
              <h1 style={{ margin: '10rem 0' }}>Nemate novih porudžbina</h1>
            )}

            {orders &&
              orders.map((item, index) => (
                <RecievedOrder key={index} item={item} />
              ))}
          </>
        )}

        {accountTab === 2 && (
          <div className='messages'>
            {messages && Object.keys(messages).length === 0 && (
              <h1 style={{ margin: '10rem 0' }}>Nemate novijih poruka</h1>
            )}

            {messages &&
              messages.map((item, index) => (
                <Message key={index} item={item} />
              ))}
          </div>
        )}
      </div>
    </MainLayout>
  )
}

// export const getServerSideProps = async (context) => {
//   const session = await getSession({ req: context.req })

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: { session },
//   }
// }
export default Admin
