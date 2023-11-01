import {Mybutton} from "./components/button"
import { Myoutput } from "./components/output"
import { Dispatch, useEffect, useState, SetStateAction } from "react"
import { Types } from "./types/types"

export default function App() {
  const[store, setStore] = useState(null) as [Types | null, Dispatch<SetStateAction<null>>]
  const handleClick = () => {
    const fetchData = async () => {
  
        const data = await fetch("https://api.chucknorris.io/jokes/random")
       // const data = await fetch("https://icanhazdadjoke.com/",{headers: {Accept:"application/json"}})
        const json = await data.json()
        .catch()
         setStore(json)

         
    }
    fetchData()
}
//if(store === null){
 // return <div></div>
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-cyan-300 to-blue-500 flex flex-col justify-center">
       <Myoutput chuckText={store?.value || "loading joke"}/>
        <Mybutton onClick={handleClick}/>
      </div>
    </>
  )
}
