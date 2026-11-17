import type { FormProps } from "../types/formProps";

function Form({cipo}: FormProps) {
    function megse(e: MouseEvent) {
        e.preventDefault();
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
                            <input className="form-control" value={cipo === undefined? '':cipo.nev} name="nev" type="text"/>
                        </div>
                        <div className="col-sm-6">
                            <label className="form-label" htmlFor="kiadas">Kiadás éve</label>
                            <input className="form-control" name="kiadas" value={cipo === undefined? "":String(cipo.kiadas)} type="date"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8">
                            <label className="form-label" htmlFor="ar">Ár</label>
                            <input className="form-control" name="ar" type="number" value={cipo === undefined? "":cipo.ar}/>
                        </div>
                        <div className="col-sm-4 radioBtn">
                            <input className="form-check-input" checked= {cipo !== undefined && cipo.elerheto} type="radio" name="elerheto"/>
                            <label className="form-check-label" htmlFor="elerheto">Elérhető</label>
                        </div>
                    </div>
                    {cipo !== undefined && (
                        <div>
                            <button className="btn btn-success formBtn">frissítés</button>
                            <button className="btn btn-danger formBtn"> törlés</button>
                            <button className="btn btn-secondary formBtn" onClick={(e:MouseEvent)=> megse(e)}> mégse</button>
                        </div>
                    )}
                    { cipo === undefined && (
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