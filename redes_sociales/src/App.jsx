import Menu from "./Componentes/Menu"

import Perfil from "./Componentes/Perfil"
import Acordeon from "./Componentes/Acordeon"
import Intereses from "./Componentes/Intereses"
import Alerta from "./Componentes/Alerta"

import Nuevopost from "./Componentes/Nuevopost"

import Eventos from "./Componentes/Eventos"
import Request from "./Componentes/Request"
import Adds from "./Componentes/Adds"



function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Menu />

    {/* Importamos los componentes */}
     <div className="w3-row">

     {/* Columna izquierda */}
     <div className="w3-col m3">
      <Perfil />
      <Acordeon/>
      <Intereses/>
      <Alerta/>
     </div>

      {/* Columna central */}
      <div className="w3-col m7">
      <Nuevopost/>
      </div>


      {/* Columna derecha */}
      <div className="w3-col m2">
        <Eventos/>    
        <Request/>
        <Adds/>
        
         </div>

    
      




    </div>

    </>
  )
}

export default App
