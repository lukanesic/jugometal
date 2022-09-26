import React, { useRef, useState } from 'react'
import Link from 'next/link'

import MainLayout from './../../layout/MainLayout'
import Logo from './../../components/Logo'
import Form from '../../components/Form'

const Login = () => {
  const [error, setError] = useState()

  const enteredEmail = useRef()
  const enteredPassword = useRef()

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('hi')
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

        <div className='alternate'>
          <h4>{`Nemate nalog?`}</h4>
          <Link href='/registration'>Registrujte se ovde.</Link>
        </div>
      </Form>
    </MainLayout>
  )
}

export default Login
