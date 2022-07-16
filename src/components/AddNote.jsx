import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import * as Swal from 'sweetalert2';

const axios = require('axios').default;

const AddNote = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  let navigate = useNavigate();

  const guardarNota = () => {
    axios
      .post('https://localhost:5001/api/notes', {
        title: titulo,
        body: descripcion,
      })
      .then((result) => {
        if (result.status === 201) {
          Swal.fire({
            icon: 'success',
            title: 'Nota creada',
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            navigate('/');
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className='pt-5'>
      <Card>
        <CardBody>
          <CardTitle tag='h5'>Añadir nota</CardTitle>
          <Form>
            <FormGroup>
              <Label>Titulo</Label>
              <Input
                name='titulo'
                value={titulo}
                onChange={(e) => {
                  setTitulo(e.target.value);
                }}
                placeholder='Escribe el titulo'
                type='text'
              />
            </FormGroup>
            <FormGroup>
              <Label>Descripcion</Label>
              <Input
                name='descripcion'
                value={descripcion}
                onChange={(e) => {
                  setDescripcion(e.target.value);
                }}
                placeholder='Escribe la descripcion'
                type='textarea'
              />
            </FormGroup>
            <FormGroup>
              <Button color='success' outline onClick={guardarNota}>
                Añadir
              </Button>
              <Button className='m2' color='danger' outline>
                <Link to='/'>Cancelar</Link>
              </Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default AddNote;
