import React,{useState, useEffect} from 'react'
import '../styles/Home.css'
import './InstrumentCard'
import InstrumentCard from './InstrumentCard'

export default function Home({setCurrentInstrument, currentInstrument}) {
    const[list, setList]= useState([])

    useEffect(()=>{
        fetch('/instruments')
        .then((r)=>r.json())
        .then((instruments)=>{
            setList(instruments)
            setCurrentInstrument('dvdvdfbdgbdg')
        })
    },[])
    
  return (
    <div className='container'>
        <div className='home-header'>
            <div >
                <h4>MUSIC RENTALS SIMPLIFIED</h4>
                <h1>Rent an instrument in minutes</h1>
                <button>CHOOSE INSTRUMENT</button>
            </div>

            <div>
                <img src='https://drive.google.com/uc?id=1mQl0PF-ut6QCj56NTV8c4tZJqJR52ZVK'/>
            </div>
            
        </div>
        
        <div className='list'>
            {list.map((instrument)=>{
                return <InstrumentCard key={instrument.name} instrument={instrument} setCurrentInstrument={setCurrentInstrument}
                currentInstrument={currentInstrument}/>
            })}
        </div>

        <div>

        </div>
    </div>
 
 )
}

