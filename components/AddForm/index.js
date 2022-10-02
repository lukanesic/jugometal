import React, { useRef, useState } from 'react'

const AddForm = () => {
  const [feedback, setFeedback] = useState(false)

  const title = useRef()
  const category = useRef()
  const subcategory = useRef()
  const url = useRef()
  const image = useRef()
  const description = useRef()
  const about = useRef()
  const keyWords = useRef()
  const spec1 = useRef()
  const spec2 = useRef()
  const spec3 = useRef()
  const spec4 = useRef()
  const spec5 = useRef()

  const resetForm = () => {
    title.current.value = ''
    category.current.value = ''
    subcategory.current.value = ''
    url.current.value = ''
    image.current.value = ''
    description.current.value = ''
    about.current.value = ''
    keyWords.current.value = ''
    spec1.current.value = ''
    spec2.current.value = ''
    spec3.current.value = ''
    spec4.current.value = ''
    spec5.current.value = ''

    setTimeout(() => {
      setFeedback(false)
    }, [10000])
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
      spec1: spec1.current.value,
      spec2: spec2.current.value,
      spec3: spec3.current.value,
      spec4: spec4.current.value,
      spec5: spec5.current.value,
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
        setFeedback(true)
      }
    } catch (err) {
      console.log(err)
    }
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
        placeholder='Opis proizvoda do 15 reci'
        required
        className='inputLabel'
        ref={description}
      />

      <label>Veci opis Proizvoda</label>
      <input
        type='text'
        placeholder='Opis proizvoda do 30 reci'
        required
        className='inputLabel'
        ref={about}
      />

      <label>Kljucne reci proizvoda</label>
      <input
        type='text'
        placeholder='Uneti 5-6 kljucne reci proizvoda (ime, kategoriju, podkategoriju) i odvajati zarezom!'
        required
        className='inputLabel'
        ref={keyWords}
      />

      <div className='specs'>
        <div>
          <label>Specifikacija br.1</label>
          <input
            type='text'
            placeholder='Uneti jednu tehnicku karakteristiku modela'
            required
            className='inputLabel'
            ref={spec1}
          />
        </div>
        <div>
          <label>Specifikacija br.2</label>
          <input
            type='text'
            placeholder='Uneti jednu tehnicku karakteristiku modela'
            required
            className='inputLabel'
            ref={spec2}
          />
        </div>
        <div>
          <label>Specifikacija br.3</label>
          <input
            type='text'
            placeholder='Uneti jednu tehnicku karakteristiku modela'
            required
            className='inputLabel'
            ref={spec3}
          />
        </div>
        <div>
          <label>Specifikacija br.4</label>
          <input
            type='text'
            placeholder='Uneti jednu tehnicku karakteristiku modela'
            required
            className='inputLabel'
            ref={spec4}
          />
        </div>
        <div>
          <label>Specifikacija br.5</label>
          <input
            type='text'
            placeholder='Uneti jednu tehnicku karakteristiku modela'
            required
            className='inputLabel'
            ref={spec5}
          />
        </div>
      </div>

      {!feedback && <button>Dodajte proizvod</button>}
      {feedback && <button className='green'>Proizvod uspešno ubačen</button>}
    </form>
  )
}
export default AddForm
