import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BiUser, BiCodeAlt, BiListCheck, BiMailSend } from "react-icons/bi";

export const Burger = () => {

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

  const hiddenAfterClick = () => {
    setBurgerClass("burger-bar unclicked");
    setMenuClass("burger-menu hidden");
  }

  return (
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
              <Link to='/inicio' onClick={ hiddenAfterClick }>
                  Acerca de mí
              </Link>
            </li>
            <li className='burger-item-list'>
              <BiCodeAlt className='item-list-icon'/>
              <Link to='/proyectos' onClick={ hiddenAfterClick }> 
                  Portfolio 
              </Link>
            </li>  
            <li className='burger-item-list'>
              <BiListCheck className='item-list-icon'/>
              <Link to='/curriculum' onClick={ hiddenAfterClick }> 
                Currículum
              </Link>
            </li>
            <li className='burger-item-list'>
              <BiMailSend className='item-list-icon'/>  
              <Link to='/contacto' onClick={ hiddenAfterClick }> 
                Contacto
              </Link>
            </li>  
          </ul>
        </div>
    </div>
  );
}
