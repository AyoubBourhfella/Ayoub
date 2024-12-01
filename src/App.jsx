import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';
import Footer from './components/Footer';
import Splash from './components/Splash';

const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));
const Projets = lazy(() => import('./Pages/Projets'));

function App() {
  return (
    <>
      <Router>
        <AnimatePresence>
          <Suspense fallback={<Splash />}>
            <Container>
              <Navbar />
            </Container>

            <Routes>
              <Route path='/' element={<About />} />
              <Route path='/Projets' element={<Projets />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/*' element={<h1>404 Not Found</h1>} />
            </Routes>
          </Suspense>

          <Footer />
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
