import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap';

const MainTable = () => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Descripcion</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>test</th>
          <td>test</td>
          <td>test</td>
          <td>
            <Button color='primary' outline>
              <Link to={'/ver/id'}>Visualizar</Link>
            </Button>
            <Button color='danger' outline>
              Eliminar
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default MainTable;
