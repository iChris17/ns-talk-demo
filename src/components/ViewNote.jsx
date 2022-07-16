import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  Spinner,
} from 'reactstrap';

const axios = require('axios').default;

const ViewNote = () => {
  const [nota, setNota] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('https://localhost:5001/api/notes/' + id)
      .then((result) => {
        if (result.status === 200) {
          setNota(result.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container className='pt-5'>
      <Card>
        <CardBody>
          <CardTitle tag='h5'>Visualizar nota</CardTitle>
          <Form>
            <FormGroup>
              <Label>Titulo</Label>
              <Input name='titulo' value={nota.title} readOnly type='text' />
            </FormGroup>
            <FormGroup>
              <Label>Descripcion</Label>
              <Input name='descripcion' value={nota.body} readOnly type='textarea' />
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
