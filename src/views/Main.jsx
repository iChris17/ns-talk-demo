import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Spinner } from 'reactstrap';
import MainTable from '../components/Table';

const axios = require('axios').default;

const Main = () => {
  const [notas, setNotas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://localhost:5001/api/notes')
      .then((result) => {
        if (result.status === 200) {
          setNotas(result.data);
        } else {
          setNotas([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container className='pt-5'>
      <h2>Tabla de notas</h2>
      <Button className='mt-2 mb-2' color='primary' outline>
        <Link to={'/crear'}>Crear nota</Link>
      </Button>
      {loading ? <Spinner /> : <MainTable notas={notas} />}
    </Container>
  );
};

export default Main;
