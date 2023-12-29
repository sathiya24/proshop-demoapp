import React from 'react';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
// import logo from './assets/logo.png';
import HomeScreen from './screens/HomeScreen';
import Product from './components/Products';
import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Header/>
    <main className='py-3'>
    <Container>
        <Outlet />
    </Container>
    </main>
    <Footer />
    </>
  );
};

export default App