import React, {useState} from 'react';
const InstrumentContext = React.createContext();


function InstrumentProvider({ children }){
    const [selectedInstrument, setSelectedInstrument] = useState({});

    return <InstrumentContext.Provider value={{selectedInstrument, setSelectedInstrument}}>{children}</InstrumentContext.Provider>
}

export {InstrumentContext, InstrumentProvider}