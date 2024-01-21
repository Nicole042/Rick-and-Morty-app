
import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import LocationCard from './components/LocationCard'
import ResidentCard from './components/ResidentCard'

function App() {
const [inputValue, setInputValue] = useState("")
const [locationId, setLocationId] = useState()
const getLocationUrl = `https://rickandmortyapi.com/api/location/${locationId}`
const getLocationsUrl = `https://rickandmortyapi.com/api/location?name=${inputValue}`
const [location, getLocation, getLocationError] = useFetch(getLocationUrl)
const [locations, getLocations, getLocationsError] = useFetch(getLocationsUrl)

useEffect (() => {
  getLocations()
}, [inputValue])

useEffect(() => {
  if (locationId) {
    getLocation()
  }
}, [locationId])

const inputLocation = useRef()

const handleUserSelect = (e, location) => {
  e.stopPropagation()
  const inputEl = document.getElementById("input")
  inputEl.value = ""
  setLocationId(location.id)
  setInputValue("")
}

const handleUserInput = (e) => {
  e.stopPropagation()
  setInputValue(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
}

const htmlResponse = () => {
  if (getLocationError) {
    return <h2>Hey! No results found</h2>
  }

  return (
    <>
      <LocationCard location={location} />

      <div className='resident_container'>
        { location?.residents.map(url => <ResidentCard key={url} url={url} />) }
      </div>
    </>
  )
}

  return (
    <div className='card'>
      <img className='card_img' src="/rickMortyImg.jpg" alt="" />
      <h1 className='card_title'>Rick and Morty</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder= "Enter location name" className='card_input' id="input" onChange={(e) => handleUserInput(e)} ref={inputLocation} type="text" />
        <ul>
          {
              locations?.results.map((location) =>
                <li key={location.id} onClick={ (e) => handleUserSelect(e, location)}>
                  {
                    getLocationsError || inputValue === "" ? "" : location.name
                  }
                </li>
              )
          }
        
        </ul>
      </form>
      { htmlResponse() }
    </div>
  )
}

export default App
