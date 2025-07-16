import { useState } from 'react'
import './App.css'

function App() {
  const [input , setInput] = useState("")
  const [data , setData] = useState(['akshay' , 'saini'])

  function handleAddition(e)
  {
    if(e.key === "Enter" && input.trim() !== "")
    {
      setData((prev)=> [...prev , input]);
            setInput("")

    }


  }

  return (
    <div className='app'>
      <h1 className='heading'>Chips Input</h1>
      <input type="text" placeholder='Enter Your Text' className='input' onChange={(e) => setInput(e.target.value) } onKeyDown={(e)=>handleAddition(e)}  />
      <div className='dis-chip'>
        {data.map((item)=> <div className='chip' key={item} >{item} <button onClick={}>❌</button> </div>)}

      </div>
    </div>
   
  )
}

export default App
