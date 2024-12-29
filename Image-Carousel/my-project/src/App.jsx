

import { useEffect, useState } from 'react'


function App() {

  const[images,setImages] = useState([])
  const[index,setIndex] = useState(0)

  const handleplusIndex = () =>{
    setIndex(index+1)
  }
  const handleminusIndex = () =>{
    setIndex(index-1)
  }

  const fetchImages = async () => {

    const url = 'https://www.reddit.com/r/aww/top/.json?t=all';
    const res = await fetch(url);
    const result = await res.json();
    const data = result.data.children;
    const list = data.filter(
      (item) =>
        item.data.url_overridden_by_dest.includes('.jpg')).map((item) => item.data.url_overridden_by_dest);
      setImages(list)
  }

  useEffect( ()=>{
    fetchImages();
  },[])

  return (
      <div className='clex text-center items-center'>
        <button onClick={handleminusIndex}>
          {"<"}
        </button>
        <img src= {images[index]} alt='not-found' className='w-full '>
       </img>
        <button onClick={handleplusIndex} >
          {">"}
        </button>
      </div>
 
  )
}

export default App
