import React, { useRef } from 'react'

const AddForm = ({ open, setOpen, setNotification }) => {
  const title = useRef()
  const category = useRef()
  const subcategory = useRef()
  const url = useRef()
  const image = useRef()
  const description = useRef()
  const about = useRef()
  const keyWords = useRef()

  const resetForm = () => {
    title.current.value = ''
    category.current.value = ''
    subcategory.current.value = ''
    url.current.value = ''
    image.current.value = ''
    description.current.value = ''
    about.current.value = ''
    keyWords.current.value = ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const searchKey = keyWords.current.value.replace(/,/g, ' ')

    const product = {
      title: title.current.value,
      category: category.current.value,
      subcategory: subcategory.current.value,
      url: url.current.value,
      image: image.current.value,
      description: description.current.value,
      about: about.current.value,
      seoKey: keyWords.current.value,
      searchKey: searchKey,
    }

    try {
      const response = await fetch('/api/products/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })

      const data = await response.json()
      console.log(data)

      if (data.msg === 'arived') {
        resetForm()
        // Feedback da je poruka poslata
        setNotification('Uspesno ste ubacili proizvod')
        setOpen(!open)
      }
    } catch (err) {
      console.log(err)
    }

    console.log(product)
  }

  return (
    <form className='add-product-form' onSubmit={(e) => handleSubmit(e)}>
      <label>Ime proizvoda</label>
      <input
        type='text'
        placeholder='Primer: Solis 60'
        required
        className='inputLabel'
        ref={title}
      />

      <label>Kategorija proizvoda</label>
      <input
        type='text'
        placeholder='Primer: traktori / stocarstvo / ratarstvo (obavezno malim slovima)'
        required
        className='inputLabel'
        ref={category}
      />

      <label>Podkategorija proizvoda</label>
      <input
        type='text'
        placeholder='Primer: solis / balirke / motalice (obavezno malim slovima)'
        required
        className='inputLabel'
        ref={subcategory}
      />

      <label>Link Proizvoda</label>
      <input
        type='text'
        placeholder='Primer: solis-60 (obavezno malim slovima i odvajanje reci - linijom)'
        required
        className='inputLabel'
        ref={url}
      />

      <label>Slika Proizvoda</label>
      <input
        type='text'
        placeholder='Slika je link koji dolazi sa oficijalne stranice proizvoda koji se ubacuje'
        required
        className='inputLabel'
        ref={image}
      />

      <label>Opis Proizvoda</label>
      <input
        type='text'
        placeholder='Opis proizvoda u najkracim crtama'
        required
        className='inputLabel'
        ref={about}
      />

      <label>Veci opis Proizvoda</label>
      <input
        type='text'
        placeholder='Opis proizvoda'
        required
        className='inputLabel'
        ref={description}
      />

      <label>Kljucne reci proizvoda</label>
      <input
        type='text'
        placeholder='Uneti 5-6 kljucne reci proizvoda (ime, kategoriju, podkategoriju) i odvajati zarezom!'
        required
        className='inputLabel'
        ref={keyWords}
      />

      {!open && <button>Dodajte proizvod</button>}
      {open && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 'fit-content',
          }}
        >
          <button
            className='green'
            style={{
              background: 'green',
              color: '#fff',
              border: '1px solid transparent',
            }}
            onClick={() => setOpen(!open)}
          >
            Proizvod je ubačen
          </button>
          <button onClick={() => setOpen(!open)}>Dodajte nov</button>
        </div>
      )}
    </form>
  )
}
export default AddForm
