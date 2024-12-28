import { useState } from 'react';
import './App.css';


function App() {
  const data = [
    {
      id:"name",
      label:"Name",
      inputType:"text",
      
    },
    {
      id:"Email",
      label:"Email",
      inputType:"text",
      
    },
    {
      id:"DOB",
      label:"DOB",
      inputType:'date',
      
    }
  ]

  return (
    <div className='App'>
      <form >
        
            <label></label>
            <input
              type=''
            />
            <button>
             next
            </button>
        </form>
    </div>
  )
}

export default App;
