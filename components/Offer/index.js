import React from 'react'

const Offer = ({ heading, description, data }) => {
  return (
    <div className='offer'>
      <div className='offer-header'>
        <h3>{heading}</h3>
        <p>
          Pogledajte neke od naših najprodavanijih i najpristupacnijih proizvoda
          koji su spremi za porudzbine istog trenutka.
        </p>
      </div>

      <div className='carousel-wrapper'>
        {[1, 2, 3, 4].map((item, index) => (
          <div className='card-wrapper' key={index}>
            <div className='card-img'></div>
            <div className='card-info'>
              <h5>Lorem ipsum</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, hic.
              </p>
              <a>Detaljnije</a>
            </div>
            <div className='vertical-line' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Offer
