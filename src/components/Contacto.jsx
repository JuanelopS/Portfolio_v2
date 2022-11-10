import { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { service, template, publicKey } from '../config/emailjs';
import '../styles/Contacto.css';

export const Contacto = () => {

  const [ sent, setSent ] = useState(false);
  const [ emailProtected, SetEmailProtected ] = useState(true);

  const form = useRef();

  /* Protección para el email de contacto */
  useEffect(() => {
    setTimeout(() => SetEmailProtected(false), 1500);
  }, []);

  const sendEmail = e => {
    e.preventDefault();

    /* no subir a github */
    emailjs.sendForm(service, template, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setSent(true);
    document.querySelector('.contact-form').reset();
  }

  return (
    <>
      <div className='container-form fade-in'>
        <form ref = { form } onSubmit = { sendEmail } className="contact-form">
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
            <textarea name="message" id="message" rows="5" maxLength="250" required></textarea>
          </div>
          <div className="form-group">
            {
              sent ?
              <input type="submit" value="Mensaje Enviado!" style={{ backgroundColor: '#f04630', color: 'whitesmoke'}} disabled/>
              :
              <input type="submit" value="Enviar" />
            }

            
          </div>
        </form>
      </div>
      <div className="email-contact-option">
        <p>O si lo prefiere puede contactarme a través de &nbsp;
          {
            emailProtected ? 
            <a href="">[ protected... ]</a> 
            :
            <a href="mailto:contacto@juangavira.me">contacto@juangavira.me</a>
          }
        </p>
      </div>
    </>
  )
}
