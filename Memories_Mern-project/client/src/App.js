import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container'; // Make sure to import Container from Material-UI
import Navbar from './components/Navbar/Navbar';
import Design from './components/Design/Design';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Design />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Routes>
      </div>
    </Container>
  </BrowserRouter>
);

export default App;
