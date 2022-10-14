import { useState, useEffect } from 'react';
import logo from '../assets/img/caraf.jpeg';
import { FaTwitter, FaGithub, FaLinkedin, FaFreeCodeCamp } from 'react-icons/fa';
import './Acerca.css';

export const Acerca = () => {

  /* useState y useEffect para mostrar/ocultar mi careto según el ancho de la pantalla */

  const [ show, setShow ] = useState(true);
  const minWidth = 1300;
  
  useEffect(() => {
    outerWidth <= minWidth && setShow(false);
    
    window.addEventListener('resize', () => {
        outerWidth <= minWidth 
        ? (setShow(false))
        : (setShow(true))
      });

  }, [Acerca]);

  return (
    <>
      <div className='about'>
        <h2 className='about-text-title'>Bienvenid@ a mi página web...</h2>
        <div className='about-body'>
          <img className={ show ? 'about-img' : 'hidden'} src={ logo } />
          <div className='about-text'>
            <p className='about-text-item'>
              <span className='about-text-highlight'>H</span>ola amig@, primero de todo muchas gracias por tu visita. 
              Te cuento... soy un proyecto de desarrollador web que intenta abrirse camino en este mundillo.
              Después de casi 10 años trabajando como administrativo me embarco en esta nueva aventura que me apasiona. 
              En su momento, cursé un CGFS de Administración de Sistemas Informáticos porque me encantaba
              todo lo relacionado con la informática (aprendí a programar C de forma autodidacta en el instituto...), pero
              por desgracia nunca pude dedicarme a ello... <strong>¡HASTA AHORA!</strong>
            </p>
            <p className='about-text-item'>
              Actualmente estoy realizando un curso de Desarrollo Web en Grup Cief en Barcelona (que por cierto es genial como centro) 
              y anteriormente ya realicé otro sobre JavaScript (ES6) en CIFO L'Hospitalet (JAB enseña muy bien), y una vez termine 
              tengo pensando seguir formándome a la vez que intento encontrar un puesto como junior.
            </p>
            <p className='about-text-item'>
              Previamente ya contaba con conocimientos de C, PHP y SQL, y por las mañanas me empapo con
              diferentes cursos online, ya sea de JavaScript más avanzado, BootStrap, Control de versiones con Git y ahora mismo 
              dándole duro a React y TypeScript cuando el tiempo que no estoy en el curso presencial me lo permite.
            </p>
            <p className='about-text-item'>
              Un saludo y gracias de nuevo por visitar mi web.
            </p>
            
          </div>
        </div>
        <div className='media-icons'>
              <FaGithub />
              <FaTwitter />
              <FaLinkedin />
              <FaFreeCodeCamp />
        </div>
      </div>
    </>
  )
}
