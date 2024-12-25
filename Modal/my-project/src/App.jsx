import React, { useState } from 'react'
import Modal from './Modal'


function App() {
 
const [isopen,setisOpen] = useState(false)
const [isaccepted, setisAccepted] = useState(false)

const showOffer =()=>{
  setisOpen(!isopen)
}

const offer = () =>{
  setisAccepted(true)
  setisOpen(false)
}

  return (
    <div className="mx-auto text-center text-2xl font-semibold text-green-600 mt-5" >
      MODAL 
      <div className="flex items-center justify-center h-screen">
        { !isaccepted ?(
          <button className="bg-gray-700 text-white p-2 rounded-sm" onClick={showOffer}>Show Offer</button>
        ):<h1>Offer accepted</h1>
        }
        
        {
          isopen && <Modal showOffer={showOffer} offer={offer} isaccepted={isaccepted}/>
        }
      </div>
    </div>
  )
}

export default App
