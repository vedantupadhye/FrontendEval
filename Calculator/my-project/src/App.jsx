import { useState } from "react";


function App() {
 
  const numbers = ['0','1','2','3','4','5','6','7','8','9','+','-','/','*','=','.','C']
  const[value,setValue] = useState('')

  const handleValue =(e) =>{
    const id = e.target.id
    if(id ==='C'){
      setValue('')
    }
    else if(id=== '='){
      handleSubmit()
    }else{
      setValue((value) =>value+id)
    }

  }

  const handleSubmit =(e) =>{
    e?.preventDefault();
    try {
      const ans = eval(value)
      setValue(ans)
    } catch (error) {
      alert('Invalid Input')
    }
  }
  console.log(value)
  return (
    <div className="flex flex-col items-center content-center">
     <div className="text-red-400 text-center text-2xl font-bold">Calculator</div>
     <form className="mt-12" onSubmit={handleSubmit}>
        <input type="text" className="border border-black p-2 rounded-md w-60" value={value} />
     </form>
     <div className="mt-8 grid grid-cols-4 w-72"
     onClick={handleValue}>
      {
        numbers.map((item,index) =>{
          return(
            <button id={item} key={index} className="bg-green-600 text-white p-3 m-2 rounded-md" >{item}</button>
          )
        })
      }
     </div>
    </div>
  )
}

export default App
