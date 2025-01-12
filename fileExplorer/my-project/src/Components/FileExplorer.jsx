import { useState } from "react"

export default function FileExplorer({folderData}){
    
    const [showChildren ,setShowChildren] = useState(false);
    return(

        <div>
            <div className="mx-6 my-4 border cursor-pointer">
                {folderData.type === "folder" ? (showChildren ? "📂" : "📁") : "📄"}
                <span className="px-1" onClick={() => setShowChildren(!showChildren)}>
                {folderData.name}
                </span>
                  
            {   showChildren&&
                folderData?.children?.map((item,index) =>{
                    return(
                       <FileExplorer key={index} folderData={item} />
                    )
                })
            }  
            </div>  
        </div>
    )
}