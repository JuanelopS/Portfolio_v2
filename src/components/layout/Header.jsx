import { useState } from "react";
import { Burger } from './Burger';
import { BiUser, BiCodeAlt, BiListCheck, BiMailSend } from "react-icons/bi";
import { NavLink, Link } from 'react-router-dom';
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
          <div className='title'>
            <h1>JUAN <span className="title-g">G</span>AVIRA</h1>
          </div>
        </div>
      </Link>
      {/* isActive es devuelto por el componente Navlink para informar si un enlace se encuentra "activo" */}
      {  
      width > 1300 ?
      (
        <nav className='navbar'>
          {/* menu-items */}
          <ul className='nav-list'>
            <li className='item-list'>
              <NavLink to='/inicio' className={({ isActive }) => isActive ? "active" : ""}> 
                <BiUser className='item-list-icon'style={{ verticalAlign: 'middle' }}/> SOBRE MÍ
              </NavLink>
            </li>
            <li className='item-list'>
              <NavLink to='/proyectos' className={({ isActive }) => isActive ? "active" : ""}> 
                 <BiCodeAlt className='item-list-icon' style={{ verticalAlign: 'middle' }}/> PORTFOLIO 
              </NavLink>
            </li>  
            <li className='item-list'>
              
              <NavLink to='/curriculum' className={({ isActive }) => isActive ? "active" : ""}> 
                <BiListCheck className='item-list-icon'style={{ verticalAlign: 'middle' }}/> CURRÍCULUM
              </NavLink>
            </li>
            <li className='item-list'>
              
              <NavLink to='/contacto' className={({ isActive }) => isActive ? "active" : ""}> 
                <BiMailSend className='item-list-icon' style={{ verticalAlign: 'middle' }}/>  CONTACTO
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
