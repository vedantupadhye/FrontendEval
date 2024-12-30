import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const emptyArray = ["", "", "", ""];
  const refs = [useRef(),useRef(),useRef(),useRef()]  
  const [inputs,setInputs] =useState(emptyArray)

  useEffect(() =>{
    refs[0].current.focus()
  },[])

  const handleChange = (e,index) =>{
    const val = e.target.value;
    if(!Number(val))
      return;
    if(index < inputs.length -1){
      refs[index+1].current.focus()
    }
    const copyInputs  = [...inputs]
    copyInputs[index] = val;
    setInputs(copyInputs)
  }

  const handleOnKeyDown =(e,index) =>{
    if(e.keyCode === 8){
      const copyInput = [...inputs];
      copyInput[index] = '';
      setInputs(copyInput)
    }
  }
  console.log(inputs)
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-red-500 text-2xl">Two-Factor Input</h1>
        <div className="flex justify-center space-x-2 mt-4">
          {emptyArray.map((item, i) => (
            <input
              value={inputs[i]}
              key={i}
              ref = {refs[i]}
              type="text"
              maxLength="1"
              className="border w-12 h-12 text-center"
              onChange={(e) => handleChange(e,i)}
              onKeyDown={(e) => handleOnKeyDown(e,i)}
            />
          ))}
        </div>
        <button className="bg-purple-500 p-2 text-white mt-6">Submit</button>
      </div>
    </div>
  );
}

export default App;
