import { useState } from "react";
import { Burger } from './Burger';
import { BiUser, BiCodeAlt, BiListCheck, BiMailSend } from "react-icons/bi";
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/img/img-logo.svg';
import '../../styles/Header.css';


export const Header = () => {

  const [ width, setWidth ] = useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
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
      width > 1575 ?
      (
        <nav className='navbar'>
          {/* menu-items */}
          <ul className='nav-list'>
            <li className='item-list'>
              <BiUser className='item-list-icon'/>
              <NavLink to='/inicio' className={({ isActive }) => isActive ? "active" : ""}> 
                SOBRE MÍ
              </NavLink>
            </li>
            <li className='item-list'>
              <BiCodeAlt className='item-list-icon'/>
              <NavLink to='/proyectos' className={({ isActive }) => isActive ? "active" : ""}> 
                PORTFOLIO 
              </NavLink>
            </li>  
            <li className='item-list'>
              <BiListCheck className='item-list-icon'/>
              <NavLink to='/curriculum' className={({ isActive }) => isActive ? "active" : ""}> 
                CURRÍCULUM
              </NavLink>
            </li>
            <li className='item-list'>
              <BiMailSend className='item-list-icon'/>  
              <NavLink to='/contacto' className={({ isActive }) => isActive ? "active" : ""}> 
                CONTACTO
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
