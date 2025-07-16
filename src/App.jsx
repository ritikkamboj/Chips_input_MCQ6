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

  function handleDelete(i)
  {
    console.log("yaha tak")
    // let list = data ;
    // list.splice(i,1)
    // setData(list)

    setData((prev)=> prev.filter((item, index)=> index!==i ))
  }

  return (
    <div className='app'>
      <h1 className='heading'>Chips Input</h1>
      <input type="text" placeholder='Enter Your Text' className='input' onChange={(e) => setInput(e.target.value) } onKeyDown={(e)=>handleAddition(e)} value={input}   />
      <div className='dis-chip'>
        { data.length ? data.map((item,i)=> <div className='chip' key={item} >{item} <button onClick={()=> handleDelete(i)}>❌</button> </div>) : <h2>No Chips</h2>}

      </div>
    </div>
   
  )
}

export default App
