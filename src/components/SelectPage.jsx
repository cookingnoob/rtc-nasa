import { useEffect } from 'react'
import { APOD_URL, ROVER_LATEST } from '../api/api-key'

const SelectPage = ({ setUrl, url }) => {

  const handleUrlChange = (event) => {
    if (event.target.value == 'apod') {
      setUrl(APOD_URL)
    } else if (event.target.value == 'rover') {
      setUrl(ROVER_LATEST)
    }
  }


  return (
    <>
      <div className='select-container'>
        <select onChange={handleUrlChange}>
          <option value="apod">APOD</option>
          <option value="rover">Latest Curiosity Mars Rover update</option>
        </select>
      </div>
    </>
  )
}

export default SelectPage