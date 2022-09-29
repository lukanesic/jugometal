import React, { useRef, useState } from 'react'

const ContactForm = ({ product }) => {
  const [error, setError] = useState()

  const enteredName = useRef()
  const enteredSurname = useRef()
  const enteredEmail = useRef()
  const enteredPhone = useRef()
  const enteredMessage = useRef()

  const resetForm = () => {
    enteredName.current.value = ''
    enteredSurname.current.value = ''
    enteredEmail.current.value = ''
    enteredPhone.current.value = ''
    enteredMessage.current.value = ''

    setError()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const inquire = {
      name: enteredName.current.value,
      surname: enteredSurname.current.value,
      email: enteredEmail.current.value,
      phone: enteredPhone.current.value,
      message: enteredMessage.current.value,
      productTitle: product.title,
      productId: product.id,
    }

    try {
      const response = await fetch('/api/inquire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inquire),
      })

      const data = await response.json()
      console.log(data)

      if (data.msg === 'arived') {
        resetForm()
        // Feedback da je poruka poslata
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className='contact-form' onSubmit={(e) => handleSubmit(e)}>
      <h3>
        Budite slobodni da nam pošaljete pitanje koje Vas interesuje u vezi
        proizvoda.
      </h3>

      <div className='flex-desktop'>
        <div>
          <label htmlFor='ime'>Ime</label>
          <input
            type='text'
            name='ime'
            id='ime'
            placeholder='Ime'
            required
            ref={enteredName}
            className='inputLabel'
          />
        </div>

        <div>
          <label htmlFor='prezime'>Prezime</label>
          <input
            type='text'
            name='prezime'
            id='prezime'
            placeholder='Prezime'
            required
            ref={enteredSurname}
            className='inputLabel'
          />
        </div>
      </div>

      <div className='flex-desktop'>
        <div>
          <label htmlFor='email'>E-mail Adresa</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='E-mail Adresa'
            required
            ref={enteredEmail}
            className='inputLabel'
          />
        </div>

        <div>
          <label htmlFor='telefon'>Telefon</label>
          <input
            type='text'
            name='telefon'
            id='telefon'
            placeholder='Telefon'
            required
            ref={enteredPhone}
            className='inputLabel'
          />
        </div>
      </div>

      <div className='textarea'>
        <label htmlFor='textarea'>Vaše pitanje o proizvodu</label>
        <textarea
          id='textarea'
          required
          ref={enteredMessage}
          placeholder='Budite slobodni da nam pošaljete pitanje koje Vas interesuje u vezi proizvoda...'
        ></textarea>
      </div>

      <button>Pošaljite pitanje</button>
    </form>
  )
}

export default ContactForm
