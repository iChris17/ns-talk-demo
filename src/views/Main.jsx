import React from 'react';
import { Button, Container } from 'reactstrap';
import MainTable from '../components/Table';

const Main = () => {
  return (
    <Container className='pt-5'>
      <h2>Tabla de notas</h2>
      <Button className='mt-2 mb-2' color='primary'>
        Crear nota
      </Button>
      <MainTable />
    </Container>
  );
};

export default Main;
