import './Proyectos.css';
import { FaGithub, FaLink } from 'react-icons/fa';
import proyecto1 from '../assets/img/projects/crud_js_php_mysql.png';
import proyecto2 from '../assets/img/projects/react-gif-search.png';
import jsicon from '../assets/img/languages/javascript.svg';
import phpicon from '../assets/img/languages/php.svg';
import mysqlicon from '../assets/img/languages/mysql.svg';
import reacticon from '../assets/img/languages/react.svg';
import bootstrapicon from '../assets/img/languages/bootstrap.svg';
import viteicon from '../assets/img/languages/vite.svg';

export const Proyectos = () => {
  return (
    <>
      {/* App Tienda */}
      <div className='projects fade-in'>
        <div className='project card dark'>
          <a className='card-img-link' href="https://www.juangavira.me/carrito" target="_blank">
            <img className='card-img' src={ proyecto1 }alt="App Tienda" />
          </a>
          <div className='card-text'>
            <div className='card-title'>
              <h2 className='card-title-text'><a href='https://www.juangavira.me/carrito'>App Tienda</a></h2>
              <img className='card-img-logo' src={ jsicon } alt='js-icon'/>
              <img className='card-img-logo' src={ phpicon } alt='php-icon'/>
              <img className='card-img-logo' src={ mysqlicon } alt='mysql-icon'/>
              <img className='card-img-logo' src={ bootstrapicon } alt='bootstrap-icon'/>
            </div>
            <div className='card-bar'></div>
            <div className='card-preview-txt'>
              Aplicación carrito de la compra desarrollada en PHP, JavaScript, MySQL con una capa de Bootstrap. Posee sistema de login y registro de usuario, panel de admin, añadir productos mediante formulario con subida de imágenes al servidor y otras funciones. Aún en desarrollo. 
            </div>
            <div className='card-icon-links'>
            <a href='https://github.com/JuanelopS/Carrito' target='_blank' style={{ color: 'purple'}}><FaGithub /></a>
            <a href='https://www.juangavira.me/carrito' target='_blank'><FaLink /></a>
            </div>
          </div>
        </div>
        
        {/* Gif Search */}
          <div className='project card dark'>
            <a class='card-img-link' href="https://react-gif-search.netlify.app/" target="_blank">
              <img class='card-img' src={ proyecto2 }alt="App Tienda" />
            </a>
            <div class='card-text'>
              <div className='card-title'>
                <h2 className='card-title-text'><a href='https://react-gif-search.netlify.app/' target='_blank'>Gif Search (Giply API)</a></h2>
                <img className='card-img-logo' src={ reacticon } alt='react-icon'/>
                <img className='card-img-logo' src={ viteicon } alt='vite-icon'/>
              </div>
              <div class='card-bar'></div>
              <div class='card-preview-txt'>
                Desarrollada en React (y la maravilla de Vite), esta aplicación hace uso de la API de <a href='https://giphy.com/' target='_blank'>Giphy</a> para la búsqueda de imágenes en formato Gif. Cuenta con paginación y enlace a cada uno de los resultados para descargarlos desde su página.
              </div>
              <div className='card-icon-links'>
              <a href='https://github.com/JuanelopS/Gif_Search' target='_blank' style={{ color: 'purple'}}><FaGithub /></a>
              <a href='https://react-gif-search.netlify.app/' target='_blank'><FaLink /></a>
            </div>
            </div>
          </div>
      </div>
    </>
  )
}
