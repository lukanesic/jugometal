import React, { useEffect, useState } from 'react'
import { fetchMessages } from '../../lib/data'
import { signOut, getSession, useSession } from 'next-auth/react'

import MainLayout from './../../layout/MainLayout'
import Logo from './../../components/Logo'
import AddForm from './../../components/AddForm'

import { useRouter } from 'next/router'
import Message from '../../components/Message'

const Admin = () => {
  const { data: session, status } = useSession()

  const [accountTab, setAccountTab] = useState(0)
  const [open, setOpen] = useState(false)

  const [messages, setMessages] = useState()
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

  console.log(messages)

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

        {accountTab === 0 && <AddForm open={open} setOpen={setOpen} />}

        {accountTab === 1 && (
          <div className='messages'>
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

const MessagePlaceholder = () => {
  return (
    <div className='msg-placehole'>
      <h1>kk</h1>
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
