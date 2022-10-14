import './Proyectos.css';
import { FaGithub, FaLink } from 'react-icons/fa';
import proyecto1 from '../assets/img/projects/crud_js_php_mysql.png';
import proyecto2 from '../assets/img/projects/react-gif-search.png';

export const Proyectos = () => {
  return (
    <>
      <div className='projects'>
        <div className='project'>
          <div className='project-img'>
            <img src={ proyecto1 }/>
          </div>
          <div className='project-text'>
            <p className='project-text-title'>Gestión tienda online</p>
            <p className='project-text-description'>JavaScript - PHP - MySQL - BootStrap</p>
            <p className='project-links'>
              <FaGithub />
              <FaLink />
            </p>
          </div>
        </div>
        <div className='project'>
          <div className='project-img'>
            <img src={ proyecto2 }/>
          </div>
          <div className='project-text'>
            <p className='project-text-title'>Buscador de Gifs</p>
            <p className='project-text-description'>React - Giphy API</p>
            <p className='project-links'>
              <FaGithub />
              <FaLink />
            </p>
          </div>
        </div>
        
      </div>
    
    </>
  )
}
