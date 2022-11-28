import axios from 'axios'
import { useState,useEffect } from 'react'
import './App.css'
import Weathercard from './componentes/Weathercard'

function App() {

 const [cord, setcord] = useState()
 const [weather, setweather] = useState()
 const [temp, settemp] = useState()

  const logrado = pos => { 
  setcord({lat: pos.coords.latitude,lon: pos.coords.longitude}) }


  useEffect(() => {
    
  navigator.geolocation.getCurrentPosition(logrado)
    return () => {
      
    }
  }, [])
  

  useEffect(() => {
    if (cord) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${cord.lat}&lon=${cord.lon}&appid=${`86f9d1860b8295e91a8746fe8787ba92`}`
    axios.get(url)
    .then(res => {setweather(res.data)
    const celcius = (res.data.main.temp - 273.15).toFixed(1)
    const farenheit = (celcius * 9/5 + 32).toFixed(1)
    settemp({celcius,farenheit})
  })
    .catch( err => console.log(err))
    
    }
  

    }, [cord])




  

  return (
    <div className="App">
    <Weathercard clima={weather} 
    temp={temp}/>
    </div>
  )
}

export default App
