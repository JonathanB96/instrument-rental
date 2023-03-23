import React, {useState, useContext} from 'react'
import '../styles/Card.css'
import { Link } from 'react-router-dom'
import Instrument from './Instrument'
import { InstrumentContext } from './SelectedInstrument'


export default function InstrumentCard({instrument, setCurrentInstrument, currentInstrument}){
  const [isOpen, setIsOpen]= useState(false)
  const {selectedIinstrument, setSelectedInstrument}= useContext(InstrumentContext)
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
          <Link to="/checkout" className="btn btn-outline-warning"onClick={()=>{
            setSelectedInstrument(instrument)
          }}> Rent now</Link>
          <div>
            <img src={instrument.image_url}/>
            <p>{instrument.name} is {instrument.description}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum molestiae voluptates sed ullam doloremque minus quas culpa ab possimus tempore iure sit libero, ipsum 
            porro molestias modi, vero provident ea.</p>
          </div>
          
        </Instrument>
        

    </div>
  )
}


