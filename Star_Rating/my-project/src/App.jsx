import {React,useState} from 'react';
import './App.css';


export default function App({starCount = 5}){

  const [num,setNum] = useState();
  const [hover ,setHover] = useState();
  console.log(hover);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center ">
        Star Ratings
        <div className='cursor-pointer'>
          {
            new Array(starCount).fill(0).map((value,index) =>{
              return(
                <span 
               key={index} className={index < num  || index < hover ?"gold":""} 
                 onClick={() =>setNum(index+1)}
                 onMouseEnter={()=>setHover(index+1)}
                 onMouseLeave={() =>setHover(0)}>&#9733;</span>
              )
            }
          )
          }
        </div>
      </h1>
    </div>
  )
}
