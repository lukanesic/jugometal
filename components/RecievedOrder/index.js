import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { formatNumber } from './../../lib/func'

const RecievedOrder = ({ item }) => {
  const date = new Date(item.createdAt).toLocaleDateString()
  return (
    <div className='message'>
      <div className='message-headers'>
        <h4>
          {item.name} {item.surname}
        </h4>{' '}
        <a href={`mailto:${item.email}`}>{item.email}</a>
        <h4>{item.phone}</h4>
        <h4>{item.address}</h4>
      </div>
      <div className='customer-message'>
        <h4>Porudžbina: {item.productTitle}</h4>
        <p>
          Ukupno za plaćanje:{' '}
          <span style={{ fontWeight: 'bold' }}>
            {formatNumber(item.price)} RSD
          </span>
        </p>
      </div>

      <div className='message-footers'>
        <h4>{date}</h4>

        {/* {!item.isRead && (
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

        {item.isRead && (
          <>
            <h4 style={{ color: 'green' }}>Status: Procitano</h4>
            <h4
              onClick={() => handleUpdate({ value: false, id: _id })}
              style={{ color: 'red', cursor: 'pointer' }}
            >
              Oznacite kao neprocitano
            </h4>
          </>
        )} */}
      </div>
      <div className='del'>
        <div className='ic'>
          {' '}
          <AiOutlineClose />
        </div>
        <p>Obrišite porudžbinu</p>
      </div>
    </div>
  )
}

export default RecievedOrder
