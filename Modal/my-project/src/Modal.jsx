import React,{useState} from 'react'


const Modal = ({showOffer,offer,isaccepted}) => {


  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg">
                <h1 className="text-2xl font-bold text-red-500">Offer</h1>
                <p className="text-lg">Get 50% off on all products</p> 
                <div className='flex justify-between'>
                  <button className="bg-gray-700 text-white p-2 mt-4" onClick={showOffer}>Close</button>
                  <button className="bg-green-700 text-white p-2 mt-4 mx-2" onClick={offer}>Select offer</button>
                 
                </div>
                
            </div>
    </div>
  )
}

export default Modal