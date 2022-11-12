import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Contacto } from '../components/Contacto';
import { Error } from '../components/Error';
import { Acerca } from '../components/Acerca';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Proyectos } from '../components/Proyectos';
import { Curriculum } from '../components/Curriculum';

export const Router = () => {

  return (

    <BrowserRouter>
        {/* HEADER - NAV */}
        <Header />
        {/* CONTENIDO PRINCIPAL */}
        <section className = 'content'>
          <Routes>
            <Route path = '/' element = { <Navigate to = '/inicio' /> } />
            <Route path = '/inicio' element = { <Acerca /> } />
            <Route path = '/proyectos' element = { <Proyectos /> }/>
            <Route path = '/curriculum' element = { <Curriculum /> } />
            <Route path = '/contacto' element = { <Contacto /> } />
            <Route path = '*' element = { <Error /> } />
          </Routes>
        </section>
        {/* FOOTER */}
        <Footer />
    </BrowserRouter>

  );
}
