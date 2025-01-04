import React, { useState } from 'react'

const Todo = () => {

    const [todo,setTodo]=useState('')
    const [todoList,setTodoList]=useState([])
   
    const handleTodoList = ()=>{
        setTodoList([...todoList,todo])      
    }
    const handleDeleteTodo = (index) => {
        const updatedTodoList = todoList.filter((_, i) => i !== index); // Remove the selected item
        setTodoList(updatedTodoList);
    };
    const handleEdit = (e) =>{
        const newValue = e.target.value;
        setTodo([...todo,newValue])
    }
 
  return (
    <div>
        <div className='mx-4 justify-center'>
            <input placeholder='type your todo' type='text' className='border-2 border-black rounded-md my-4'
                onChange={(e)=>setTodo(e.target.value)}
            ></input>
            <button className='bg-black text-white rounded-md p-2 mx-2' onClick={handleTodoList}>Add</button>
            <div>
               {
                todoList.map((item,index) =>{
                    return (
                        <div className='flex my-3 ' key={index}>
                            <div className=' text-xl flex justify-between mx-3'>
                                <p className='mr-4'>{index +1}</p>
                                {item}                                               
                                <button className='bg-red-500 text-white rounded-md p-2 mx-4' onClick={() =>handleDeleteTodo(index)}>Delete</button>   
                                <button className='bg-blue-400 text-white rounded-md p-2 mx-4' onClick={(e)=>handleEdit} >edit</button>                        
                            </div>
                        </div>
                    )
                })
               }
            </div>
        </div>
        
    </div>
  )
}

export default Todo