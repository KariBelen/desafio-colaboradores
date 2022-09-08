import React from "react";
import { BaseColaboradores } from "./BaseColaboradores";

const ListadoColaboradores = ({
  busqueda,
  nombreColaborador,
  emailColaborador,
  colaboradores
}) => {
  return (
    <div className="container">
      <hr />
      <h2>Listado de colaboradores</h2>
      <div className="listadoColaboradores">
        <ul>
            {colaboradores.filter((filter) => {
                if(busqueda === ''){
                    return filter;
                }else if(filter.nombre.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())){
                    return filter
                }
            }).map(base => <li key={base.email}> {base.nombre} - {base.correo}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default ListadoColaboradores;
