import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import Main from './views/Main';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
