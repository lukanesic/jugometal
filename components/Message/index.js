import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Message = ({ item }) => {
  // Ovo je imitacija da li je message procitana ili ne
  // To dolazi sa baze

  const {
    name,
    surname,
    email,
    phone,
    message,
    createdAt,
    productTitle,
    isRead,
    _id,
  } = item

  // Mora da se napravi new date objekat pri pravljenju same inquire. Ne moze ovde lepo da se formatira datum. Jer je na americkom
  const date = new Date(createdAt).toLocaleDateString()

  const handleUpdate = async ({ value, id }) => {
    const updateStatus = async () => {
      await fetch('/api/inquire/modify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value, id }),
      })
    }

    updateStatus()
  }

  return (
    <div className='message'>
      <div className='message-headers'>
        <h4>
          {name} {surname}
        </h4>{' '}
        <a href={`mailto:${email}`}>{email}</a>
        <h4>{phone}</h4>
      </div>
      <div className='customer-message'>
        <h4>Proizvod: {productTitle}</h4>
        <p>{message}</p>
      </div>

      <div className='message-footers'>
        <h4>{date}</h4>

        {!isRead && (
          <>
            <h4 style={{ color: 'red' }}>Status: Nije procitano</h4>
            <h4
              onClick={() => handleUpdate({ value: true, id: _id })}
              style={{ color: 'green', cursor: 'pointer' }}
            >
              Oznacite kao procitano
            </h4>
          </>
        )}

        {isRead && (
          <>
            <h4 style={{ color: 'green' }}>Status: Procitano</h4>
            <h4
              onClick={() => handleUpdate({ value: false, id: _id })}
              style={{ color: 'red', cursor: 'pointer' }}
            >
              Oznacite kao neprocitano
            </h4>
          </>
        )}
      </div>
      <div className='del'>
        <div className='ic'>
          {' '}
          <AiOutlineClose />
        </div>
        <p>Obrisite poruku</p>
      </div>
    </div>
  )
}

export default Message
