import React, {useState} from 'react'
import "./FirstComponent.css";

export const FirstComponent = () => {

    const [equipo, setEquipo] = useState("Móstoles")
  return (
    <div class="example">
        {equipo}
        <input type='text' onChange={e => setEquipo(e.target.value)}></input>
    </div>

  )
}
