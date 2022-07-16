import React from 'react';
import { Link } from 'react-router-dom';
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

const ViewNote = () => {
  return (
    <Container className='pt-5'>
      <Card>
        <CardBody>
          <CardTitle tag='h5'>Visualizar nota</CardTitle>
          <Form>
            <FormGroup>
              <Label>Titulo</Label>
              <Input name='titulo' placeholder='Escribe el titulo' type='text' />
            </FormGroup>
            <FormGroup>
              <Label>Descripcion</Label>
              <Input name='descripcion' placeholder='Escribe la descripcion' type='textarea' />
            </FormGroup>
            <FormGroup>
              <Button className='m2' color='primary' outline>
                <Link to='/'>Regresar</Link>
              </Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default ViewNote;
