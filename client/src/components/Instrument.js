import React,{useState, useEffect} from 'react'
import '../styles/Instrument.css'

export default function Instrument({open, children, onClose}) {
   if (!open) return null
  return (
    <div className='overlay'>
       <div className='instrument'>
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </div>
   
  )
}
