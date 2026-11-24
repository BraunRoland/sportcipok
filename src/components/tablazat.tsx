import type { TablazatProps } from "../types/tablazatProps";

function Tablazat({ cipo, beallitas, setModified }: TablazatProps) {
    return (
        <>
        <tr>
            <td>{cipo.nev}</td>
            <td>{String(cipo.kiadas)}</td>
            <td>${cipo.ar}</td>
            <td>{cipo.elerheto? "Igen":"Nem"}</td>
            <td><button className="btn btn-warning" onClick={() => {beallitas(cipo.id); setModified(true)}}>Módosítás</button></td>
        </tr>
        </>
    )
}

export default Tablazat;