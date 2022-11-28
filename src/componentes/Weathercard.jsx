import React, { useState } from 'react'
import './Card.css'

function Weathercard({ clima, temp }) {

  const [celsbool, setcelsbool] = useState(true)

  const click = () => {
    setcelsbool(false)
    if (celsbool === false) {
      setcelsbool(true)
    }
  }





  return (
    <div > <h1 className='title'>El clima en {clima?.name},{clima?.sys.country} es </h1>
      <article className='card'>
       
          <h3 className='descripcion'>{clima?.weather[0].description}</h3>
           <img  src={clima && `http://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`} alt="nubes imagen" />
       <h3 className='temperatura'>{celsbool ? `${temp?.celcius} °C` : `${temp?.farenheit} °F`}</h3>
            
            <ul className='lista'>
              <li><span>wind speed</span> {clima?.wind.speed} m/s </li>
              <li><span>clouds</span>{clima?.clouds.all} %</li>
              <li><span>pressure</span>{clima?.main.pressure} hpa</li>
            </ul>
         
        
        <button className='btn' onClick={click}>°F/°C</button>
        <footer>
          
        </footer>
      </article>

    </div>
  )
}

export default Weathercard
