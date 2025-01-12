import React from 'react'

const Todo = ({data}) => {
  return (
    <div className='flex gap-20 my-4 mx-72' >
         <div className=''>
        <h2 className='font-bold text-2xl my-4 '>ToDo</h2>
        <div >
            {data.Todo.map((item, index) => (
            <p className='mx-2 my-2 p-4 border cursor-move' key={index} draggable>{item}</p>
            ))}
        </div>
      </div>
        <div>
           <h2 className='font-bold text-2xl my-4'>In Progress</h2> 
           <div>
                {
                    data.InProgress.map((item,index) =>{
                        return(
                            <div className='mx-2 my-2 border p-4 cursor-move' key={index} draggable>{item}</div>
                        )
                    })
                }
           </div>
        </div>
        <div >
            <h2 className='font-bold text-2xl my-4'>Completed</h2>
            <div>
                {
                    data.Completed.map((item,index) =>{
                        return(
                            <div className='mx-2 my-2 border p-4 cursor-move'  key={index} draggable>{item}</div>
                        )
                    })
                }
           </div>
        </div>
    </div>
  )
}

export default Todo