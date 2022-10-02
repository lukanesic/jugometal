import React, { useRef, useState } from 'react'

const ContactForm = ({ product }) => {
  const [feedback, setFeedback] = useState(false)

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

    setTimeout(() => {
      setFeedback(false)
    }, [10000])
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
      const response = await fetch('/api/inquire/inquire', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inquire),
      })

      const data = await response.json()

      if (data.msg === 'arived') {
        resetForm()
        // Feedback da je poruka poslata
        setFeedback(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className='contact-form' onSubmit={(e) => handleSubmit(e)}>
      <h3>
        Za više informacije budite slobodni da nam pošaljete pitanje koje Vas
        interesuje u vezi proizvoda. Unesite vaše informacije i mi ćemo vam
        odgovoriti u najkraćem roku.
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

      {!feedback && <button>Pošaljite pitanje</button>}
      {feedback && <button className='green'>Poruka poslata</button>}
    </form>
  )
}

export default ContactForm
