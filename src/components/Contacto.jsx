import React from 'react';
import './Contacto.css';

export const Contacto = () => {
  return (
    <>
      <div className='container-form fade-in'>
        <h2 className='contact-form-title'>Formulario de Contacto</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre <span className="span-required">*</span></label>
            <input type="text" name="name" id="name" maxLength="40" required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico <span className="span-required">*</span></label>
            <input type="email" name="email" id="email" maxLength="40" required/>
          </div>
          <div className="form-group">
            <p className='message-label'>Mensaje <span className="span-required">*</span></p>
            <textarea name="message" id="message" rows="5" maxlength="250" required></textarea>
          </div>
          <div className="form-group">
            <input type="submit" value="Enviar" />
          </div>
        </form>
      </div>
      <div className="email-contact-option">
        <p>O si lo prefiere puede contactarme a través de <a href="mailto:contacto@juangavira.me">contacto@juangavira.me</a></p>
      </div>
    </>
  )
}
