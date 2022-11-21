import React, { useEffect, useRef, useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from '@firebase/storage'
import { storage } from '../../firebase'

const AddForm = () => {
  const [feedback, setFeedback] = useState(false)
  const [storageImage, setStorageImage] = useState(null)
  const [uploadedImage, setUploadedImage] = useState('')

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
  const mpcena = useRef()
  const vpcena = useRef()

  const resetForm = () => {
    title.current.value = ''
    category.current.value = ''
    subcategory.current.value = ''
    url.current.value = ''
    description.current.value = ''
    about.current.value = ''
    keyWords.current.value = ''
    spec1.current.value = ''
    spec2.current.value = ''
    spec3.current.value = ''
    spec4.current.value = ''
    spec5.current.value = ''
    mpcena.current.value = ''
    vpcena.current.value = ''
    setStorageImage(null)
    setUploadedImage('')

    setTimeout(() => {
      setFeedback(false)
    }, [10000])
  }

  const handleUploadToFirebase = async () => {
    if (storageImage !== null) {
      const imageRef = ref(
        storage,
        `gs://jugometalstorage.appspot.com/${storageImage.name}`
      )

      await uploadBytes(imageRef, storageImage)
      const imgLink = await getDownloadURL(imageRef)
      setUploadedImage(imgLink)
    } else {
      return
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const searchKey = keyWords.current.value.replace(/,/g, ' ')

    const product = {
      title: title.current.value,
      category: category.current.value,
      subcategory: subcategory.current.value,
      url: url.current.value,
      image: uploadedImage,
      description: description.current.value,
      about: about.current.value,
      seoKey: keyWords.current.value,
      searchKey: searchKey,
      spec1: spec1.current.value,
      spec2: spec2.current.value,
      spec3: spec3.current.value,
      spec4: spec4.current.value,
      spec5: spec5.current.value,
      mpcena: +mpcena.current.value,
      vpcena: +vpcena.current.value,
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
      <div className='specs'>
        <div>
          <label>
            Ime proizvoda{' '}
            <span>
              <span>*</span>
            </span>
          </label>
          <input
            type='text'
            placeholder='Primer: Solis 60'
            required
            className='inputLabel'
            ref={title}
          />
        </div>

        <div>
          <label>
            Kategorija proizvoda <span>*</span>
          </label>
          <input
            type='text'
            placeholder='Primer: traktori / stocarstvo / ratarstvo (obavezno malim slovima)'
            required
            className='inputLabel'
            ref={category}
          />
        </div>

        <div>
          <label>
            Podkategorija proizvoda <span>*</span>
          </label>
          <input
            type='text'
            placeholder='Primer: solis / balirke / motalice (obavezno malim slovima)'
            required
            className='inputLabel'
            ref={subcategory}
          />
        </div>

        <div>
          <label>
            Link Proizvoda <span>*</span>
          </label>
          <input
            type='text'
            placeholder='Primer: solis-60 (obavezno malim slovima i odvajanje reci - linijom)'
            required
            className='inputLabel'
            ref={url}
          />
        </div>

        <div>
          <label>
            Slika Proizvoda <span>*</span>
          </label>
          <input
            type='text'
            placeholder='Slika je link koji dolazi sa oficijalne stranice proizvoda koji se ubacuje'
            className='inputLabel'
            required
            onChange={(e) => setUploadedImage(e.target.value)}
            value={uploadedImage}
          />
        </div>

        <div>
          <label>Dodajte sliku </label>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <input
              type='file'
              placeholder='Dodajte sliku sačuvanu sliku'
              onChange={(e) => setStorageImage(e.target.files[0])}
            />
            <p
              onClick={() => handleUploadToFirebase(storageImage)}
              className='dodaj-btn'
            >
              Dodajte
            </p>
          </div>
        </div>
      </div>

      <label>
        Opis Proizvoda <span>*</span>
      </label>
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
        className='inputLabel'
        ref={about}
      />

      <div className='specs'>
        <div>
          <label>
            Kljucne reci proizvoda <span>*</span>
          </label>
          <input
            type='text'
            placeholder='Uneti 5-6 kljucne reci proizvoda (ime, kategoriju, podkategoriju) i odvajati zarezom!'
            required
            className='inputLabel'
            ref={keyWords}
          />
        </div>
        <div>
          <label>Specifikacija br.1</label>
          <input
            type='text'
            placeholder='Uneti jednu tehnicku karakteristiku modela'
            className='inputLabel'
            ref={spec1}
          />
        </div>
        <div>
          <label>Specifikacija br.2</label>
          <input
            type='text'
            placeholder='Uneti jednu tehnicku karakteristiku modela'
            className='inputLabel'
            ref={spec2}
          />
        </div>
        <div>
          <label>Specifikacija br.3</label>
          <input
            type='text'
            placeholder='Uneti jednu tehnicku karakteristiku modela'
            className='inputLabel'
            ref={spec3}
          />
        </div>
        <div>
          <label>Specifikacija br.4</label>
          <input
            type='text'
            placeholder='Uneti jednu tehnicku karakteristiku modela'
            className='inputLabel'
            ref={spec4}
          />
        </div>
        <div>
          <label>Specifikacija br.5</label>
          <input
            type='text'
            placeholder='Uneti jednu tehnicku karakteristiku modela'
            className='inputLabel'
            ref={spec5}
          />
        </div>
        <div>
          <label>MP cena</label>
          <input
            type='text'
            placeholder='Maloprodajna cena (samo za delove)'
            className='inputLabel'
            ref={mpcena}
          />
        </div>
        <div>
          <label>VP cena</label>
          <input
            type='text'
            placeholder='Velikoprodajna cena (samo za delove)'
            className='inputLabel'
            ref={vpcena}
          />
        </div>
      </div>

      {!feedback && <button>Dodajte proizvod</button>}
      {feedback && <button className='green'>Proizvod uspešno ubačen</button>}
    </form>
  )
}
export default AddForm
