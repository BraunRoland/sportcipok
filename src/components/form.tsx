import { useState, type MouseEvent } from "react";
import type { FormProps } from "../types/formProps";

function Form({cipo, setCipo, megse, modified, setModified}: FormProps) {
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [alertBool, setAlertBool] = useState<boolean>(false);
    const [alertShow, setAlertShow] = useState<boolean>(false)
    

    function megseBtn(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        reset()
    }

    function reset() {
        setModified(false);
        megse();
    }

    function alertFn(mess: string, err: boolean) {
        setAlertMessage(mess);
        setAlertShow(true);
        if (!err) {
            setAlertBool(true)
        } else {
            setAlertBool(false)
        }
    }

    async function modositas(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/cipok/${cipo.id}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "applications/json" 
                },
                body: JSON.stringify(cipo)
            })
            if (response.ok) {
                alertFn('Sikeres Módósítottad az adatokat!',false)
                reset();
            }
        } catch (err) {
            if (err instanceof Error) {
                alertFn(err.message, true)
            }
        }
    }

    async function hozzadas(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        try{
            const response = await fetch(`http://localhost:3000/cipok`, {
                method: "POST",
                headers: {
                    "Content-Type": "applications/json"
                },
                body: JSON.stringify({nev: cipo.nev, kiadas: cipo.kiadas, ar: cipo.ar, elerheto: cipo.elerheto})
            })
            if (response.ok) {
                alertFn('Sikeresen hozáadtál egy új cipőt!', false)
                reset();
            }
        } catch (err) {
            if (err instanceof Error) {
                alertFn(err.message,true)
            }
        }
    }


    async function torles(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/cipok/${cipo.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "applications/json"
                }
            })
            if (response.ok) {
                alertFn('Sikeresen törölted a cipőt!',false)
                reset();
            }
        } catch (err) {
            if (err instanceof Error) {
                alertFn(err.message,true)
            }
        }
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
                            <input className="form-control" name="kiadas" value={cipo.kiadas} onChange={(e) => setCipo((elozo) => ({...elozo, kiadas: e.target.value}))} type="date"/>
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
                    {modified && (
                        <div>
                            <button className="btn btn-success formBtn" onClick={(e) => modositas(e)}>frissítés</button>
                            <button className="btn btn-danger formBtn" onClick={(e) => torles(e)}> törlés</button>
                            <button className="btn btn-secondary formBtn float-md-end" onClick={(e)=> megseBtn(e)}>mégse</button>
                        </div>
                    )}
                    { !modified && (
                        <div className="row">
                            <div className="col-sm-12">
                                <button className="btn btn-success formBtn" onClickCapture={(e) => hozzadas(e)}>hozzáadás</button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
        {alertShow && (
            <div className="row">
                <div className="col-sm-8 mx-auto">
                    <div className={`alert alert-${!alertBool? "danger" : "success"}`}>
                        <strong>{!alertBool? "Hiba!": "Siker!"}</strong> {alertMessage}    
                    </div>  
                </div>
            </div>
        )}
        </>
    )
}

export default Form;