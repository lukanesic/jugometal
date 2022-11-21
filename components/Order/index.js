import React, { useEffect, useRef, useState } from 'react'

import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { resetCart } from '../../redux/slices/cartSlice'
import { formatNumber } from '../../lib/func'

const Order = () => {
  const [feedback, setFeedback] = useState(false)
  const enteredName = useRef()
  const enteredSurname = useRef()
  const enteredEmail = useRef()
  const enteredPhone = useRef()
  const enteredZip = useRef()
  const enteredAddress = useRef()
  const enteredCity = useRef()

  const router = useRouter()
  const dispatch = useDispatch()

  const { cartTotalAmonut, cartTotalQuantity, cart } = useSelector(
    (state) => state.cart
  )

  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  const resetForm = () => {
    enteredName.current.value = ''
    enteredSurname.current.value = ''
    enteredEmail.current.value = ''
    enteredPhone.current.value = ''
    enteredZip.current.value = ''
    enteredAddress.current.value = ''
    enteredCity.current.value = ''

    setTimeout(() => {
      setFeedback(false)
    }, [10000])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const order = {
      title: cart.map((item) => `${item.title} - x${item.qty}`).join(', '),
      price: cartTotalAmonut,
    }

    const inquire = {
      name: enteredName.current.value,
      surname: enteredSurname.current.value,
      email: enteredEmail.current.value,
      phone: enteredPhone.current.value,
      postal: enteredZip.current.value,
      address: enteredAddress.current.value,
      city: enteredCity.current.value,
      productTitle: order.title,
      price: order.price,
    }

    try {
      const response = await fetch('/api/order/orderProduct', {
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

        setTimeout(() => {
          setFeedback(false)
          router.replace('/')
          dispatch(resetCart())
        }, [6000])
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {domLoaded && Object.keys(cart).length === 0 && (
        <div className='empty-cart'>
          <h2>Vaša korpa je prazna</h2>
          <p>Vratite se na početnu stranicu</p>
          <button onClick={() => router.push('/')}>Početna</button>
        </div>
      )}

      {domLoaded && Object.keys(cart).length !== 0 && (
        <form className='order' onSubmit={(e) => handleSubmit(e)}>
          <h5>Kontakt informacije </h5>

          <div className='order-form'>
            <div className='order-form-ctr'>
              <div>
                <label htmlFor='ime'>
                  Ime <span>*</span>
                </label>
                <input
                  type='text'
                  id='ime'
                  placeholder='Ime'
                  required
                  ref={enteredName}
                />
              </div>
              <div>
                <label htmlFor='prezime'>
                  Prezime <span>*</span>
                </label>
                <input
                  type='text'
                  id='prezime'
                  placeholder='Prezime'
                  required
                  ref={enteredSurname}
                />
              </div>
            </div>
            <div className='order-form-ctr'>
              <div>
                <label htmlFor='broj'>
                  Broj Telefona <span>*</span>
                </label>
                <input
                  type='text'
                  id='broj'
                  placeholder='Broj Telefona'
                  required
                  ref={enteredPhone}
                />
              </div>
              <div>
                <label htmlFor='email'>
                  Email Adresa <span>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='Email Adresa'
                  required
                  ref={enteredEmail}
                />
              </div>
            </div>
            <div className='order-form-ctr'>
              <div>
                <label htmlFor='adresa'>
                  Adresa <span>*</span>
                </label>
                <input
                  type='text'
                  id='adresa'
                  placeholder='Adresa'
                  required
                  ref={enteredAddress}
                />
              </div>
              <div>
                <label htmlFor='postal'>
                  Poštanski broj <span>*</span>
                </label>
                <input
                  type='text'
                  id='postal'
                  placeholder='Poštanski broj'
                  required
                  ref={enteredZip}
                />
              </div>
            </div>
            <div className='order-form-ctr'>
              <div>
                <label htmlFor='grad'>
                  Grad <span>*</span>
                </label>
                <input
                  type='text'
                  id='grad'
                  placeholder='Grad'
                  required
                  ref={enteredCity}
                />
              </div>
            </div>
          </div>

          <div className='cart-summary'>
            <h5>Predmeti u korpi</h5>

            {cart.map((item, index) => (
              <div className='cart-summary-ctr' key={index}>
                <div className='totalno-l'>
                  <p>
                    {item.title} x{item.qty}
                  </p>
                </div>
                <div className='totalno-r'>
                  <p>{formatNumber(item.qty * item.mpcena)} RSD</p>
                </div>
              </div>
            ))}

            <h5 style={{ marginTop: '2rem' }}>Totalno</h5>
            <div className='cart-summary-ctr'>
              <div className='totalno-l'>
                <p>Totalno proizvoda u korpi</p>
                <p>Totalno za plaćanje</p>
              </div>
              <div className='totalno-r'>
                <p>x{cartTotalQuantity}</p>
                <p>{formatNumber(cartTotalAmonut)} RSD</p>
              </div>
            </div>

            <p className='disclaimer'>
              <span style={{ color: 'red' }}>*</span> Ubrzo nakon poručivanja
              proizvoda kontaktiraćemo Vas za potvrdu porudžbine. Porudžbina se
              plaća po uzeću.
            </p>

            {!feedback && <button>Poručite</button>}
            {feedback && <button className='green'>Poručeno</button>}
          </div>
        </form>
      )}
    </>
  )
}

export default Order
