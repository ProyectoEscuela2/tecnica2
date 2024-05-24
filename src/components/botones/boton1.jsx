import './boton1.css'

function BotonConIcono({accion,text,children}){

   return(
    <div className="div-boton">
        <button className="div-boton-cont" onClick={accion} type='button'>{children} {text}</button>
    </div>
    )

}

export {BotonConIcono}