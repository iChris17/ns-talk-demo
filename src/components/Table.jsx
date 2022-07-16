import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'reactstrap';

const MainTable = ({ notas }) => {
  if (notas.length === 0) {
    return <h3>No hay datos para mostrar</h3>;
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Titulo</th>
          <th>Descripcion</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {notas.map((item, index) => {
          return (
            <tr key={item.notesId}>
              <th scope='row'>{index + 1}</th>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>
                <Button color='primary' outline>
                  <Link to={'/ver/' + item.notesId}>Visualizar</Link>
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default MainTable;
