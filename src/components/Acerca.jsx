import { useState, useEffect } from 'react';
import logo from '../assets/img/caraf.jpeg';
import devIcon from '../assets/img/developer-icon.webp';
import { FaTwitter, FaGithub, FaLinkedin, FaFreeCodeCamp } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import '../styles/Acerca.css';

export const Acerca = () => {

  /* useState y useEffect para intercambiar foto/icono según el ancho de la pantalla (outerWidth) */

  const [ change, setChange ] = useState(true);
  const minWidth = 1500;
  
  useEffect(() => {
    outerWidth <= minWidth && setChange(false);
    
    window.addEventListener('resize', () => {
        outerWidth <= minWidth 
        ? (setChange(false))
        : (setChange(true))
      });

  }, [Acerca]);

  return (
    <>
      <div className='about fade-in'>
        <div className='about-body'>
          {
            change ? 
              <img className={'about-img'} src={ logo } />
            :
              <img className={'dev-img'} src={ devIcon } />
          }
          
          <div className='about-text'>
            <p className='about-text-item'>
              <span className='about-text-highlight'>H</span>ola amig@, primero de todo muchas gracias por tu visita. 
              Te cuento... soy un proyecto de desarrollador web que intenta abrirse camino en este mundillo.
              Después de casi 10 años trabajando como administrativo me embarco en esta nueva aventura que me apasiona. 
            </p>
            <p className='about-text-item'>
               En su momento, cursé un CGFS de Administración de Sistemas Informáticos porque me encantaba
              todo lo relacionado con la informática (aprendí a programar C de forma autodidacta en el instituto...), pero
              por desgracia nunca pude dedicarme a ello... <strong>¡HASTA AHORA!</strong>
            </p>
            <p className='about-text-item'>
              Cuento con conocimientos de JavaScript ES6+, Node.js, PHP, CSS3, SASS, SQL, Git... y ahora mismo estoy 
              dándole duro desde hace unos meses a React y TypeScript &nbsp;
              <IconContext.Provider value={{ style: { verticalAlign: 'bottom', color: '#f04630' } }}>
                <AiFillHeart size={24}/>
              </IconContext.Provider> 
            </p>
            <p className='about-text-item'>
              Un saludo y gracias de nuevo por visitar mi web.
            </p>
            
          </div>
        </div>
        <div className='media-icons'>
              <a href='https://github.com/JuanelopS' target="_blank"><FaGithub className='media-icons-animation'/></a>
              <a href='https://twitter.com/juangaviraweb' target="_blank"><FaTwitter className='media-icons-animation'/></a>
              <FaLinkedin className='media-icons-animation'/>
              <FaFreeCodeCamp className='media-icons-animation'/>
        </div>
      </div>
    </>
  )
}
