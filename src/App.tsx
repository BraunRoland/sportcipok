import { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import type { Cipo } from './types/cipok'

function App() {
  const [cipok,setCipok] = useState<Cipo[]>([])
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/cipok");
      const data: Cipo[] = await response.json();
      setCipok([...data]);
    }
    getData();
  },[])
  return (
    <>
      
    </>
  )
}

export default App
