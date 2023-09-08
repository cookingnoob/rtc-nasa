import { useState, useEffect } from 'react'
import './App.css'
import GetContent from './components/GetContent'
import Calendar from './components/Calendar';
import SelectPage from './components/SelectPage';
import { APOD_URL, ROVER_CALENDAR } from './api/api-key'

function App() {
  const [url, setUrl] = useState(APOD_URL);

  return (
    <>
      <GetContent url={url} />
      {url.includes('apod') ? <Calendar setUrl={setUrl} url={url} /> : null}
      <SelectPage setUrl={setUrl} url={url} />
      <footer>Alan Coste</footer>
    </>
  )
}

export default App

//Crear un estado para la liga de la API_URL 
//crear select para escoger si Apod o rover
//useEffect que escuche el input del select para actualizar el valor de API_URL

//Componente que haga el render del contenido de la api

