import { BtnVolver } from "../btn-volver/BtnVolver"
import { Regalos } from "../regalos/Regalos"
import "../LandingPage/pagina-ppt.css"

export function ElejirRegalos () {
    return(
        <div className="pagina-ppt">
            <Regalos />
            <span className="firma">Creado por Ciro</span>
        </div>
    )
}