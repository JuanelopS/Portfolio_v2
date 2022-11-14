import { useState, useEffect } from 'react';
import cara from '../assets/img/caraf.jpeg';
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
        outerWidth <= minWidth ? 
          (setChange(false))
          : 
          (setChange(true))
      });

  }, []);

  return (
    <>
      <div className='about fade-in'>
        <div className='about-body'>
          {
            change ? 
              <img className={'about-img'} src={ cara } alt='yo'/>
            :
              <img className={'dev-img'} src={ devIcon } alt='dev-icon'/>
          }
          
          <div className='about-text'>
            <p className='about-text-item'>
              <span className='about-text-highlight'>H</span>ola amig@, primero de todo muchas gracias por tu visita. 
              Te cuento... soy un proyecto de desarrollador web que intenta abrirse camino en este mundillo.
            </p>
            <p className='about-text-item'>
               En su momento, cursé un CGFS de Administración de Sistemas Informáticos porque me encantaba
              todo lo relacionado con la informática (aprendí a programar C de forma autodidacta en el instituto...), pero
              por desgracia nunca pude dedicarme a ello.
            </p>
            <p className='about-text-item'>
              Cuento con conocimientos de JavaScript ES6+, React, Node.js, PHP, CSS3, SASS, SQL, Git...y me desenvuelvo tanto en Windows como en sistemas UNIX.
              Actualmente, por las tardes acudo presencialmente a un curso de Desarrollo Web FullStack en Grup Cief (Barcelona) y desde hace meses por 
              las mañanas estoy liado con Redux y TypeScript &nbsp;
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
              <a href='https://www.linkedin.com/in/juan-gavira-763786242' target="_blank"><FaLinkedin className='media-icons-animation'/></a>
              <a href='https://www.freecodecamp.org/JuanelopS' target="_blank"><FaFreeCodeCamp className='media-icons-animation'/></a>
        </div>
      </div>
    </>
  )
}
