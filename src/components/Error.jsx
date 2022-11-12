import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import error from '../assets/img/error.svg';
import '../styles/Error.css';

export const Error = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
        navigate('/');
    }, 3000);
  }, []);


  return (
    <div className='error fade-in'>
      <div className='error-image'>
        <img src={ error } alt='error-image' />
      </div>
      <div className='error-text'>
        <h2 className='error-main-text'>
          <span className='error-text-number'>404</span>
          <span className='error-secondary-text'> &nbsp; Página no encontrada</span>
        </h2>
        <p>Regresarás a la página de inicio de 3 segundos...</p>
      </div>
    </div>
  )
}
