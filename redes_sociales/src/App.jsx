import Menu from "./Componentes/Menu"
import Perfil from "./Componentes/Perfil"
import Acordeon from "./Componentes/Acordeon"
import Intereses from "./Componentes/Intereses"
import Alert from "./Componentes/Alert"


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Menu />

    {/* Importamos los componentes */}
     <div class="w3-row">

     {/* Columna izquierda */}
     <div class="w3-col m3">
      <Perfil />
      <Acordeon/>
      <Intereses />
      <Alert />
     </div>

      {/* Columna central */}


      {/* Columna derecha */}

    
      




    </div>

    </>
  )
}

export default App
