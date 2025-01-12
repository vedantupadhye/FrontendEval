import { useState } from 'react'
import FileExplorer from './Components/FileExplorer'
import data from './data.json'

function App() {


  return (
    <div >
      <FileExplorer folderData={data}/>
    </div>
  )
}

export default App
