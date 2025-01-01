import Post from "./Post";
import React, { useEffect, useState } from 'react'

export default function InfiniteScroll() {
    const [data, setData] = useState([]);
    const [pageNo,setPageNo]=useState(0)
    const[scrollDown,setScrollDown]=useState(false)

    const handleScrollDown =() =>{
        setScrollDown(!scrollDown)
        setPageNo(pageNo+1)
    }
    console.log(data)

    useEffect(() => {
        const fetchPosts =async ()=>{
            const element = await fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=3`)
            const res = await element.json()
            setData((oldData) =>[...oldData,...res])
        }     
        fetchPosts();
    }, [pageNo]);

    return (
      <div onScroll={handleScrollDown}
      style={{ height: "100vh", overflowY: "scroll" }} // Make the container scrollable
      className="flex flex-wrap justify-center">
        <Post data = {data} />
      </div>
    )
}
