// https://jsonplaceholder.typicode.com/photos?_pages=${index}&_limit=9
import React, { useEffect,useState } from 'react'
function App() {

  const [images, setImages] = useState([])

  const fecthImages = async (index) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/photos?_pages=${index}&_limit=9`)
    const data = await result.json()
    return data
  }

  const fetchFirstPage = async () => {
    const data = await fecthImages(1)
    setImages(data)
  }

  useEffect(() => {
    fetchFirstPage()
  },[])

  console.log(images)
  return (
    <div className='text-center justify-center flex h-full w-screen '>   
      {
        images?.map((image,index) =>{
          return(
            <img src={image.thumbnailUrl} key={index} alt={image.title}/>
          )
        })
      }
    </div>
  )
}

export default App
