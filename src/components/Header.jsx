import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({setBusqueda}) => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container fluid>
      <Navbar.Brand href="#">Buscador de Colaboradores</Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Buscar un Colaborador"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </Form>
    </Container>
  </Navbar>
  )
}

export default Header