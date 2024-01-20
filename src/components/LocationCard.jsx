import React from 'react'
import './styles/LocationCard.css'

const LocationCard = ({ location }) => {
  return (
    <article className='location_card_container'>
        <h2 className='location_card_title'>{location?.name}</h2>
        <ul className='card_information'>
            <li className='card_information_container'><span className='card_information_label'>Type:</span><span className='card_information_value'>{location?.type}</span></li>
            <li className='card_information_container'><span className='card_information_label'>Dimension: </span><span className='card_information_value'>{location?.dimension}</span></li>
            <li className='card_information_container'><span className='card_information_label'>Population: </span><span className='card_information_value'>{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationCard