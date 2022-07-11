import { useState } from "react"
import contador from "../Css/Contador.css"


const Contador = () =>{ 

const [state,setState]= useState(0)

const suma =() =>{
    setState(
        state + 1
    )
};

const resta =() =>{
    setState(
        state - 1
    )
};

    return(
        <>
       <div className="contador-principal">
        <p>Aca va a estar el contador</p>
        <p>{state}</p>
       </div>
       <br/>
       <div className="boton">
       <button onClick={()=>resta()}>-1</button>
       <button onClick={()=>setState(0)}>Recetear</button>
       <button onClick={()=>suma()} >+1</button>
       </div>
       
        </>
    )
}

export default Contador