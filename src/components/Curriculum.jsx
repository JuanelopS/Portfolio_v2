import { MdDeveloperMode, MdLibraryBooks, MdCode, MdWork } from "react-icons/md";
import './Curriculum.css';


export const Curriculum = () => {
  return (
    <>

      <div className='cv-container fade-in'>
        <h2 className='cv-text-title text-title'>Educación, Experiencia y Certificaciones</h2>
        <h2 className='cv-subtitle'>
          <MdDeveloperMode />
          Tecnologías conocidas
        </h2>
        <ul className='cv-list'>
          <li className='cv-list-item'>
            HTML, CSS3, SASS, BootStrap.
          </li>
          <li className='cv-list-item'>
            JavaScript ES6
          </li>
          <li className='cv-list-item'>
            React
          </li>
          <li className='cv-list-item'>
            PHP, Node.JS
          </li>
          <li className='cv-list-item'>
            SQL, mySQL
          </li>
        </ul>
        <h2 className='cv-subtitle'>
          <MdLibraryBooks />
          Educación
        </h2>
        <ul className='cv-list'>
          <li className='cv-list-item'>
            Ciclo Formativo de Grado Superior de Administración de Sistemas Informáticos (Centro Salesiano "San Ignacio", Cádiz).
          </li>
          <li className='cv-list-item'>
            Introducción al Desarrollo Web - Certificado Profesional (Centres Innovació i Formació Ocupacional - CIFO, L'Hospitalet).
          </li>
          <li className='cv-list-item'>
            Desarrollo de Aplicaciones con Tecnología Web - Certificado Profesional (Grup Cief, Barcelona).
          </li>
        </ul>
        <h2 className='cv-subtitle'>
          <MdCode />
          Certificaciones
        </h2>
        <ul className='cv-list'>
          <li className='cv-list-item'>
            Responsive Web Design (freeCodeCamp).
          </li>
          <li className='cv-list-item'>
            JavaScript Algorithms and Data Structures (freeCodeCamp).
          </li>
          <li className='cv-list-item'>
            Frond-End Web UI Frameworks and Tools: BootStrap 4 (Coursera - The Hong Kong University of Science and Technology).
          </li>
          <li className='cv-list-item'>
            Version Control with Git (Coursera - Atlassian University).
          </li>
        </ul>
        <h2 className='cv-subtitle'>
          <MdWork />
          Experiencia
        </h2>
        <ul className='cv-list'>
          <li className='cv-list-item'>
            2013 - 2021: Administrativo (Administración de Justicia)
          </li>
          <li className='cv-list-item'>
            2009 - 2012: Técnico Informático: HelpDesk e instalación y mantenimiento de hardware/software (Solinteg SL, Cádiz);
          </li>
        </ul>
      </div>
    </>
  )
}
