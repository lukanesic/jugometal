import React, { useRef, useState } from 'react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'

import { signIn, getSession } from 'next-auth/react'

import MainLayout from './../../layout/MainLayout'
import Logo from './../../components/Logo'
import Form from '../../components/Form'

const Login = () => {
  const [error, setError] = useState()

  const enteredEmail = useRef()
  const enteredPassword = useRef()

  const router = useRouter()

  const resetForm = () => {
    enteredEmail.current.value = ''
    enteredPassword.current.value = ''

    setError()
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    const email = enteredEmail.current.value
    const password = enteredPassword.current.value

    if (password.length < 6) {
      setError('Password must contain more than 6 characters!')
      return
    }

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })

      if (result.error) {
        setError(result.error)
        return
      }

      resetForm()
      router.replace('/admin')
    } catch (err) {
      console.log(err.code)
      setError('Failed')
    }
  }

  return (
    <MainLayout>
      <Logo />
      <Form onSubmit={(e) => handleLogin(e)}>
        <div className='formdiv'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            required
            ref={enteredEmail}
            className='inputLabel'
          />
        </div>

        <div className='formdiv'>
          <label htmlFor='password'>Lozinka</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Lozinka'
            required
            ref={enteredPassword}
            className='inputLabel'
          />
        </div>

        <button>Ulogujte se</button>
      </Form>
    </MainLayout>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req })

  if (session) {
    return {
      redirect: {
        destination: '/admin',
        permanent: false,
      },
    }
  }

  return {
    props: { session },
  }
}

export default Login
