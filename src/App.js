import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ColaboradoresForm from "./components/ColaboradoresForm";
import Header from "./components/Header";
import ListadoColaboradores from "./components/ListadoColaboradores";
import { BaseColaboradores } from "./components/BaseColaboradores";
import "./App.css";

function App() {

  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [nombreColaborador, setNombreColaborador] = useState("");
  const [emailColaborador, setEmailColaborador] = useState("");
  const [busqueda, setBusqueda] = useState("");

  return (
    <div className="App">
      <Header setBusqueda={setBusqueda}/>
      <ColaboradoresForm
        setNombreColaborador={setNombreColaborador}
        nombreColaborador={nombreColaborador}
        setEmailColaborador={setEmailColaborador}
        emailColaborador={emailColaborador}
        setColaboradores={setColaboradores}
        colaboradores={colaboradores}
      />
      <ListadoColaboradores
        busqueda={busqueda}
        nombreColaborador={nombreColaborador}
        emailColaborador={emailColaborador}
        colaboradores={colaboradores}
      />
    </div>
  );
}

export default App;
