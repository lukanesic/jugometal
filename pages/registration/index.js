import React, { useRef, useState } from 'react'
import Link from 'next/link'

import MainLayout from './../../layout/MainLayout'
import Logo from './../../components/Logo'
import Form from '../../components/Form'

const Registation = () => {
  const [error, setError] = useState()
  const enteredName = useRef()
  const enteredEmail = useRef()
  const enteredPassword = useRef()
  const confirmPassword = useRef()
  const enteredAddress = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hi')
  }

  return (
    <MainLayout>
      <Logo />
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div className='formdiv'>
          <label htmlFor='name'>Ime i Prezime</label>
          <input
            type='name'
            name='name'
            id='name'
            placeholder='Ime i Prezime'
            required
            ref={enteredName}
            className='inputLabel'
          />
        </div>

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
          <label htmlFor='email'>Adresa</label>
          <input
            type='text'
            name='address'
            id='address'
            placeholder='Adresa'
            required
            ref={enteredAddress}
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

        {error === 'Must contain more than 6 characters!' && <li>{error}</li>}

        <div className='formdiv'>
          <label htmlFor='confirmPassword'>Potvrdite Lozinku</label>
          <input
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            placeholder='Potvrdite Lozinku'
            required
            ref={confirmPassword}
            className='inputLabel'
          />
        </div>

        {error === 'Passwords dont match. Please try again' && <li>{error}</li>}

        <button>Registrujte se</button>

        <div className='alternate'>
          <h4>{`Imate nalog?`}</h4>
          <Link href='/login'>Ulogujte se ovde.</Link>
        </div>
      </Form>
    </MainLayout>
  )
}

export default Registation
