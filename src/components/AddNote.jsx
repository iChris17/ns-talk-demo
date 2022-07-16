import React from 'react';
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

const AddNote = () => {
  return (
    <Container>
      <Card>
        <CardBody>
          <CardTitle tag='h5'>Añadir nota</CardTitle>
          <Form>
            <FormGroup>
              <Label>Titulo</Label>
              <Input name='titulo' placeholder='Escribe el titulo' type='text' />
            </FormGroup>
            <FormGroup>
              <Label>Descripcion</Label>
              <Input name='descripcion' placeholder='Escribe la descripcion' type='text' />
            </FormGroup>
            <FormGroup>
              <Button color='success'>Añadir</Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default AddNote;
