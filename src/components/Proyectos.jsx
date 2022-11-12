// TODO: hacer archivo barril para estas importaciones

import '../styles/Proyectos.css';
import { FaGithub, FaLink } from 'react-icons/fa';
import proyecto1 from '../assets/img/projects/proyecto_img_tienda.png';
import proyecto2 from '../assets/img/projects/proyecto_img_gifs.png';
import proyecto3 from '../assets/img/projects/proyecto_img_portfolio.png';
import proyecto4 from '../assets/img/projects/proyecto_img_weather.png';
import jsicon from '../assets/img/languages/javascript.svg';
import phpicon from '../assets/img/languages/php.svg';
import mysqlicon from '../assets/img/languages/mysql.svg';
import reacticon from '../assets/img/languages/react.svg';
import bootstrapicon from '../assets/img/languages/bootstrap.svg';
import viteicon from '../assets/img/languages/vite.svg';
import sassicon from '../assets/img/languages/sass.svg';

export const Proyectos = () => {
  return (
    <>
      {/* App Tienda */}
      <div className='projects fade-in'>
        <div className='project card dark'>
          <a className='card-img-link' href="https://www.juangavira.me/carrito" target="_blank">
            <img className='card-img' src={ proyecto1 } alt="App Tienda" />
          </a>
          <div className='card-text'>
            <div className='card-title'>
              <h2 className='card-title-text'><a href='https://www.juangavira.me/carrito'>App Tienda</a></h2>
              <img className='card-img-logo' src={ phpicon } alt='php-icon'/>
              <img className='card-img-logo' src={ jsicon } alt='js-icon'/>
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
            <a className='card-img-link' href="https://react-gif-search.netlify.app/" target="_blank">
              <img className='card-img' src={ proyecto2 } alt="Gif Search" />
            </a>
            <div className='card-text'>
              <div className='card-title'>
                <h2 className='card-title-text'><a href='https://react-gif-search.netlify.app/' target='_blank'>Gif Search (Giply API)</a></h2>
                <img className='card-img-logo' src={ reacticon } alt='react-icon'/>
                <img className='card-img-logo' src={ viteicon } alt='vite-icon'/>
              </div>
              <div className='card-bar'></div>
              <div className='card-preview-txt'>
                Desarrollada en React (y la maravilla de Vite), esta aplicación hace uso de la API de <a href='https://giphy.com/' target='_blank'>Giphy</a> para la búsqueda de imágenes en formato Gif. Cuenta con paginación y enlace a cada uno de los resultados para descargarlos desde su página.
              </div>
              <div className='card-icon-links'>
              <a href='https://github.com/JuanelopS/Gif_Search' target='_blank' style={{ color: 'purple'}}><FaGithub /></a>
              <a href='https://react-gif-search.netlify.app/' target='_blank'><FaLink /></a>
            </div>
            </div>
          </div>
        {/* Portfolio */}
          <div className='project card dark'>
            <a className='card-img-link' href='#'>
              <img className='card-img' src={ proyecto3 } alt='Portolio' />
            </a>
            <div className='card-text'>
              <div className='card-title'>
                <h2 className='card-title-text'><a href='#'>Portfolio Personal</a></h2>
                <img className='card-img-logo' src={ reacticon } alt='react-icon'/>
                <img className='card-img-logo' src={ viteicon } alt='vite-icon'/>
              </div>
              <div className='card-bar'></div>
              <div className='card-preview-txt'>
                Pues mismamente este humilde Portfolio personal, desarrollado en React con la ayuda de Vite. Mobile First, haciendo uso de <a href='https://www.emailjs.com/' target='_blank'>email.js</a> para el formulario de contacto y react-router-dom para la navegación por la página. Sujeto a cambios 😅.
              </div>
              <div className='card-icon-links'>
              <a href='https://github.com/JuanelopS/Portfolio_v2' target='_blank' style={{ color: 'purple'}}><FaGithub /></a>
              <a href='#' target='_blank'><FaLink /></a>
            </div>
            </div>
          </div>
        {/* WeatherApp */}
          <div className='project card dark'>
            <a className='card-img-link' href='#'>
              <img className='card-img' src={ proyecto4 } alt='Weather App' />
            </a>
            <div className='card-text'>
              <div className='card-title'>
                <h2 className='card-title-text'><a href='#'>WeatherApp</a></h2>
                <img className='card-img-logo' src={ reacticon } alt='react-icon'/>
                <img className='card-img-logo' src={ sassicon } alt='react-icon'/>
                <img className='card-img-logo' src={ viteicon } alt='vite-icon'/>
              </div>
              <div className='card-bar'></div>
              <div className='card-preview-txt'>
                Aplicación de previsión del tiempo meteorológico. Desarrollado en React, Sass para los estilos y Vite para el despliegue. 
                Actualmente toma la posición actual mediante la api geolocation de html5 para mostrar la información. Pensado implementar búsqueda
                por ciudad. Actualmente en desarrollo.
              </div>
              <div className='card-icon-links'>
              <a href='https://github.com/JuanelopS/WeatherApp' target='_blank' style={{ color: 'purple'}}><FaGithub /></a>
              <a href='#' target='_blank'><FaLink /></a>
            </div>
            </div>
          </div>
      </div>
    </>
  )
}
