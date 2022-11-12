import React from 'react'

const Rezervni = () => {
  return (
    <div className='offer'>
      <div className='offer-header'>
        <h3>Rezervni delovi</h3>
        <p>
          Jugometal isporučuje originalne rezervne delove za servisiranje
          traktora i mašina u garantnom i postgarantnom periodu
        </p>
      </div>

      <div className='carousel-wrapper'>
        {[1, 2, 3, 4].map((item, index) => (
          <div className='card-wrapper' key={index}>
            <div className='card-img'></div>
            <div className='card-info'>
              <h5>Lorem ipsum</h5>
            </div>
            <div className='vertical-line' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rezervni
