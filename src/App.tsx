import { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import type { Cipo } from './types/cipo'
import Tablazat from './components/tablazat'
import Form from './components/form'

function App() {
  const uresCipo: Cipo = {id: "", nev: "", ar: 0, elerheto: false, kiadas: new Date("")};
  const [cipok,setCipok] = useState<Cipo[]>([]);
  const [vCipo,setVCipo] = useState<Cipo>(uresCipo);
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/cipok");
      const data: Cipo[] = await response.json();
      setCipok([...data]);
    }
    getData();
  },[])

  function megse() {
    setVCipo(uresCipo);
  }
  
  function beallitas(id: string)
  {
    const shoe: Cipo =  cipok.filter((cipo) => cipo.id == id)[0];
    setVCipo(shoe);
  }

  return (
    <>
    <div className="container">
      <Form
        cipo={vCipo}
        setCipo={setVCipo}
        megse={megse}
      />
      <div className="row">
        <div className="col-sm-8 mx-auto">
          <table className='table table-bordered text-center'>
            <thead>
              <tr>
                <th>Név</th>
                <th>Kiadás éve</th>
                <th>Ár ($)</th>
                <th>elérhető?</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                cipok.map((c) => (
                  <Tablazat
                    cipo={c}
                    beallitas = {(id: string)=> beallitas(id)}
                    key={c.id}
                  />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
