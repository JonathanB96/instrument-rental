import React, {useState} from 'react'
import '../styles/Card.css'
import { Link } from 'react-router-dom'
import Instrument from './Instrument'


export default function InstrumentCard({instrument, setCurrentInstrument, currentInstrument}){
  const [isOpen, setIsOpen]= useState(false)
    function handleClick(){
       setIsOpen(!isOpen)
        

    }
    function onClose(){
    
      setIsOpen(false)
    }
  return (
    
    <div className='card'onClick={handleClick}>
       
        <img src={instrument.image_url}/>
       
        <p>{instrument.name}</p>
        <p>${instrument.price}/mo</p>
        <Instrument open={isOpen} onClose={onClose} instrument={instrument}>
          show {instrument.name}
        </Instrument>
    </div>
  )
}


