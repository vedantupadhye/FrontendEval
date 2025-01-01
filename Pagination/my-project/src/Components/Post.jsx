import { useEffect,useState } from "react";
import Pagination from "./Pagination";

export default function Post(){
    const[data,setData] = useState([])
    const[pageNo,setPageNo] =useState(1)
    
    useEffect(() => {
        const getImages = async () => {
            try {
                const res = await fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`);
                const response = await res.json();
                setData(response); 
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };
        getImages();
    }, [pageNo]); 
    console.log(data); 
    return(
        <div className="">
            POSTs
            <div className="w-full h-full bg-gray-400 flex justify-center">
            {
                data.map((item,index)=>{
                    return(
                        <img src={item.download_url}
                        key={index}
                        className="w-64 rounded-lg m-3 h-80"
                        ></img>
                    )
                })
            }
               
            </div>
            <Pagination  pageNo ={pageNo}  setPageNo ={setPageNo}/>
        </div>
    )
}