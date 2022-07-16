import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React from 'react';
import Main from './views/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddNote from './components/AddNote';
import ViewNote from './components/ViewNote';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/crear' element={<AddNote />} />
          <Route path='/ver/:id' element={<ViewNote />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
