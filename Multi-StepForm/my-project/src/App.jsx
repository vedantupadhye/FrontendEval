import { useState } from 'react';
import './App.css';


function App() {

  const [index, setIndex] = useState(0);
  const [formData, setformData] = useState({
    name: '',
    email: '',
    dob:'',
    password: ''
  })
  const [isformSubmitted , setisformSubmitted] = useState(false)

  const handleIndex = (e) => {
    e.preventDefault()
    if (index === data.length - 1) {
      return console.log('submitted');
    }
    else {
      setIndex(index + 1);
    }
  }

  const handleBack = (e) => {
    e.preventDefault()
    setIndex(index - 1)
  }

  const handleInput = (e)=>{
    const id =e.target.id;
    const val = e.target.value;
    setformData({...formData,[id]:val})
    console.log(formData)
  }

  const handleSubmission =() =>{
    setisformSubmitted(true)
  }

  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      placeholder: "Enter your name",
    },
    {
      id: "email",
      label: "Email",
      inputType: "text",
      placeholder: "Enter your email",
    },
    {
      id: "dob",
      label: "DOB",
      inputType: 'date',
      placeholder: "Enter your DOB",
    },
    {
      id: "password",
      label: "Password",
      inputType: 'text',
      placeholder: "Enter your password",
    },

  ]

  return (
    <div className='App'>
      {
        !isformSubmitted ?
      <form className='flex flex-col items-center'>

        {
          index > 0 &&
          <a href='/' onClick={handleBack}> Back </a>
        }

        <label className='text-lg'>{data[index].label}</label>
        <input
        onChange={handleInput}
          value={formData[data[index].id]}
          id = {data[index].id}
          type={data[index].inputType}
          placeholder={data[index].placeholder}
          className='border-2 border-gray-500 p-2 my-2'
        />
        {index === data.length-1 ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmission}
          >
            Submit
          </button>
        ) : (
          <button
            className="bg-red-600 p-2 rounded-md text-white"
            onClick={handleIndex}
          >
            Next
          </button>
        )}
      </form>
      :
        <div >
        <h1 className='text-red-600 font-bold text-2xl'>Success</h1>
        <div className=' text-2xl'>
          <span>Name: {formData.name}</span>
          <br></br>
          <span>email: {formData.email}</span>
          <br></br>
          <span>DOB: {formData.dob}</span>
          <br></br>
          <span>password: {formData.password}</span>
        </div>
      </div>
}
    </div>
  )
}

export default App;
