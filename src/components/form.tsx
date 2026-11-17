import type { MouseEvent } from "react";
import type { FormProps } from "../types/formProps";

function Form({cipo, setCipo, megse}: FormProps) {
    function megseBtn(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        megse();
    }

    function hozzadas() {

    }

    function modositas() {

    }


    function torles() {

    }
    return (
        <>
        <div className="row">
            <div className="col-sm-8 mx-auto">
                <form className="rounded-4">
                    <div className="row">
                        <div className="col-sm-6">
                            <label className="form-label" htmlFor="nev">Név</label>
                            <input className="form-control" value={cipo.nev} onChange={(e) => setCipo((elozo) => ({...elozo, nev: e.target.value}))} name="nev" type="text"/>
                        </div>
                        <div className="col-sm-6">
                            <label className="form-label" htmlFor="kiadas">Kiadás éve</label>
                            <input className="form-control" name="kiadas" value={String(cipo.kiadas)} onChange={(e) => setCipo((elozo) => ({...elozo, kiadas: new Date(e.target.value)}))} type="date"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <label className="form-label" htmlFor="ar">Ár</label>
                            <input className="form-control" name="ar" type="number" value={cipo.ar} onChange={(e) => setCipo((elozo) => ({...elozo, ar: Number(e.target.value)}))}/>
                        </div>
                        <div className="col-sm-4 radioBtn">
                            <input className="form-check-input" checked= {cipo.elerheto} onChange={(e) => setCipo((elozo) => ({...elozo, elerheto: e.target.checked}))} type="radio" name="elerheto"/>
                            <label className="form-check-label" htmlFor="elerheto">Elérhető</label>
                        </div>
                    </div>
                    {cipo.id != "" && (
                        <div>
                            <button className="btn btn-success formBtn">frissítés</button>
                            <button className="btn btn-danger formBtn"> törlés</button>
                            <button className="btn btn-secondary formBtn float-md-end" onClick={(e)=> megseBtn(e)}> mégse</button>
                        </div>
                    )}
                    { cipo.id == "" && (
                        <div className="row">
                            <div className="col-sm-12">
                                <button className="btn btn-success formBtn">hozzáadás</button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
        </>
    )
}

export default Form;