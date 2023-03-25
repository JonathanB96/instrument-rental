import React,{useState, useEffect} from 'react'
import '../styles/Home.css'
import './InstrumentCard'
import InstrumentCard from './InstrumentCard'
import FAQ from './FAQ'
import Footer from './Footer'

export default function Home({setCurrentInstrument, currentInstrument}) {
    const[list, setList]= useState([])

    useEffect(()=>{
        fetch('/instruments')
        .then((r)=>r.json())
        .then((instruments)=>{
            setList(instruments)
          
        })
    },[])
    
  return (
    <div className='container'>
        <div className='home-header'>
            <div >
                <h4>MUSIC RENTALS SIMPLIFIED</h4>
                <h1>Rent an instrument in minutes</h1>
                <button onClick={()=>{
                  window.scrollTo({
                    top: 700,
                    behavior: "smooth",
                  });  
                }}>CHOOSE INSTRUMENT</button>
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

        <div className=''>
            <div >
                <h4>FROM BEGINNER TO MAESTRO</h4>
                <h1>Instruments for all skill levels</h1>
                <p>Teacher-approved options for beginner, intermediate, and advanced players.</p>
            </div>

            <div>
                <img src='https://drive.google.com/uc?id=1wFo_AlqW9IGHdBWlui-XtiCSOvoi85tc'/>
            </div>
            
            
        </div>

        <div className=''>
            <div >
                <h4>NO STRINGS ATTACHED</h4>
                <h1>Rent month-to-month, no long-term contract</h1>
                
            </div>

            <div>
                <img src='https://drive.google.com/uc?id=1IU3wpF5Dma8b3zcNDFC6uIWAdg6z79ns'/>
            </div>
            
            
        </div>

        </div>
        <Footer>
            <section>
                <h1>Ready to play</h1>
                <button onClick={()=>{
                    window.scrollTo({
                        top: 700,
                        behavior: "smooth",
                      });
                }}>CHOOSE INSTRUMENT</button>
            </section>
            <section></section>
        </Footer>
    </div>
 
 )
}

