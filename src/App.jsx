import { useState } from 'react'
import Component from './Component'

function App() {
let [Input_val,setInputVal]=useState('');
let [Api ,setApi]=useState();
const AfterSubmit=(e)=>{

const apiKey = "5426b7fad692b114adbff83ed381a27e"; // replace with your real key

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Input_val}&appid=${apiKey}&units=metric`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.cod == '404')
    {
      setApi(undefined)
    }
    else{
    setApi(data)
    }
  })
  .catch(err => console.error("Error:", err));

  e.preventDefault();
}
  return (  
    <>
       <h1>SIMPLE WEATHER APP</h1>
      <form className='SearchDiv' onSubmit={(e)=>AfterSubmit(e)} >
        <input type="text" value={Input_val} onChange={(e)=>setInputVal(e.target.value)}/>
        <button>Search</button>
      </form>

     <div className="Cities_div">
      <Component data={Api}></Component>
      </div>
    </>
  )
}

export default App
