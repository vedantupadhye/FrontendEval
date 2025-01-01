export default function Post ({data}){
    return(
    <div>
        {
            data.map((item,index)=>{
                return(
                    <img src={item.download_url} className="w-72 h-80 object-cover rounded-xl m-5" key={item.id}></img>
                )
            })
        }
        
    </div>
    )
}