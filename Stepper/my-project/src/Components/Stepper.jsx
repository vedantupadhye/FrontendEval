import React from 'react'
import { useState } from 'react'
import './Stepper.css'
const Stepper = ({ steps }) => {

    const [step ,setStep]=useState(0)
    console.log(step)
    const handleContinue =() =>{
        if( step< steps.length-1){
            setStep(step+1)
        }
       
    }
    const handleBack =() =>{
        if( step>0){
        setStep(step-1)
        }
    }
    return (
        <div className='flex items-center justify-between'>
            <div >
            {
                steps.map((step, index) => {
                    return (
                        <div className='flex items-center m-10 ' key={index}>
                            <div className={`step-number ${index <= step ? "active" : " "}`}>
                                {index + 1}
                                {index < steps.length - 1 && <div className='h-10 absolute w-1 bg-gray-400 top-10 '></div>}
                            </div>

                            <div className='text-grey-400'>{step.label}</div>
                        </div>           
                    )
                })
            }
            </div>
                    <div>
                        {steps[step].content}
                    </div>
                            <div>
                                {
                                    step >0 && <button className='bg-black text-white p-2 rounded-md mx-2'  onClick={handleBack}>Back</button>
                                }
                                
                                <button className='bg-black text-white p-2 rounded-md' onClick={handleContinue}>Continue</button>
                            </div>
        </div>

    )
}

export default Stepper

