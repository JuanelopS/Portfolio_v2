import { useState } from "react";
import { BiUser, BiCodeAlt, BiListCheck, BiMailSend } from "react-icons/bi";
import { NavLink, Link } from 'react-router-dom';

import Logo from '../../assets/img/img-logo.svg';
import './Header.css';
import { Burger } from './Burger';

export const Header = () => {

  const [ width, setWidth ] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
    console.log(width)
  });

  return (
    <header className='header'>
      
      {/* main title && logo */}
      <Link to="./inicio">
        <div className='logo-title'>
          <div className='logo-container'>
            <img src={ Logo } alt="logo" className='logo-img'/>
          </div>
          <div className='title'>
            <h1>Juan Gavira</h1>
          </div>
        </div>
      </Link>
      {/* isActive es devuelto por el componente Navlink para informar si un enlace se encuentra "activo" */}
      {  
      width > 1425 ?
      (
        <nav className='navbar'>
          {/* menu-items */}
          <ul className='nav-list'>
            <li className='item-list'>
              <BiUser className='item-list-icon'/>
              <NavLink to='/inicio' className={({ isActive }) => isActive ? "active" : ""}> 
                Acerca de mí
              </NavLink>
            </li>
            <li className='item-list'>
              <BiCodeAlt className='item-list-icon'/>
              <NavLink to='/proyectos' className={({ isActive }) => isActive ? "active" : ""}> 
                Portfolio 
              </NavLink>
            </li>  
            <li className='item-list'>
              <BiListCheck className='item-list-icon'/>
              <NavLink to='/curriculum' className={({ isActive }) => isActive ? "active" : ""}> 
                Currículum
              </NavLink>
            </li>
            <li className='item-list'>
              <BiMailSend className='item-list-icon'/>  
              <NavLink to='/contacto' className={({ isActive }) => isActive ? "active" : ""}> 
                Contacto
              </NavLink>
            </li>  
          </ul>
        </nav>
      )
      :
      (
        <Burger />
      )
      }
    </header>
  );
};
