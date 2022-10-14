import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiUser, BiCodeAlt, BiListCheck, BiMailSend } from "react-icons/bi";
import './Header.css';

export const Header = () => {

  // para cambiar burger_class
  const [ burgerClass, setBurgerClass ] = useState("burger-bar unclicked");
  const [ menuClass, setMenuClass ] = useState("menu hidden");
  const [ isMenuClicked, setIsMenuClicked ] = useState(false);

  // toggle menu burger (clases css)
  const updateMenu = () => {
    if(!isMenuClicked){
      setBurgerClass("burger-bar clicked");
      setMenuClass("burger-menu visible");
    }
    else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("burger-menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  }

  return (
    <header className='header'>
      
      {/* main title && logo */}

      <div className='logo-title'>
        <div className='title'>
          <h1>Juan Gavira Web</h1>
        </div>
      </div>
      {/* isActive es devuelto por el componente Navlink para informar si un enlace se encuentra "activo" */}
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
      {/* Burger menu */}
      <div className='nav-burger'>
          <div className="burger-btn" onClick={ updateMenu }>
            <div className={ burgerClass }></div>
            <div className={ burgerClass }></div>
            <div className={ burgerClass }></div>
          </div>
        <div className={ menuClass }>
        <ul className='burger-nav-list'>
          <li className='burger-item-list'>
            <BiUser className='item-list-icon'/>
            <Link to='/inicio'>
               Acerca de mí
            </Link>
          </li>
          <li className='burger-item-list'>
            <BiCodeAlt className='item-list-icon'/>
            <Link to='/proyectos'> 
               Portfolio 
            </Link>
          </li>  
          <li className='burger-item-list'>
            <BiListCheck className='item-list-icon'/>
            <Link to='/curriculum'> 
              Currículum
            </Link>
          </li>
          <li className='burger-item-list'>
            <BiMailSend className='item-list-icon'/>  
            <Link to='/contacto'> 
              Contacto
            </Link>
          </li>  
        </ul>
        </div>
      </div>
    </header>
  );
};
