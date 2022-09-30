import React, { useState } from 'react'

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
  } = item

  // Mora da se napravi new date objekat pri pravljenju same inquire. Ne moze ovde lepo da se formatira datum. Jer je na americkom
  const date = new Date(createdAt).toLocaleDateString()
  console.log(isRead)

  return (
    <div className='message'>
      <div className='message-headers'>
        <h4>
          {name} {surname}
        </h4>{' '}
        <h4>{email}</h4>
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
              onClick={() => setIsRead(!isRead)}
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
              onClick={() => setIsRead(!isRead)}
              style={{ color: 'red', cursor: 'pointer' }}
            >
              Oznacite kao neprocitano
            </h4>
          </>
        )}
      </div>
    </div>
  )
}

export default Message
