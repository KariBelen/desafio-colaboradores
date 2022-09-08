import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "./Header";

const ColaboradoresForm = ({
  setNombreColaborador,
  nombreColaborador,
  setEmailColaborador,
  emailColaborador,
  setColaboradores,
  colaboradores
}) => {


    const sendForm = (e) => {
        e.preventDefault();
        setColaboradores([...colaboradores, {nombre: nombreColaborador, correo: emailColaborador}])
        setNombreColaborador("");
        setEmailColaborador("");
    }

  return (
    <div className="container">
        
      <Form onSubmit={sendForm}>
        <Form.Group className="mb-3" controlId="formColaboratorName">
          <Form.Label>Nombre del colaborador</Form.Label>
          <Form.Control
            type="text"
            value={nombreColaborador}
            placeholder="Ingrese el nombre del colaborador"
            onChange={(e) => setNombreColaborador(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formColaboratorEmail">
          <Form.Label>Correo del colaborador</Form.Label>
          <Form.Control
            type="email"
            value={emailColaborador}
            placeholder="Ingrese el correo del colaborador"
            onChange={(e) => setEmailColaborador(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar colaborador
        </Button>
      </Form>
    </div>
  );
};

export default ColaboradoresForm;
