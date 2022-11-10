import { MdDeveloperMode, MdLibraryBooks, MdCode, MdWork, MdArrowForward } from "react-icons/md";
import '../styles/Curriculum.css';


export const Curriculum = () => {
  return (
    <>
      <div className='cv-container fade-in'>
        <h2 className='cv-subtitle'>
          <MdDeveloperMode />
          Tecnologías conocidas
        </h2>
        <ul className='cv-list'>
          <li className='cv-list-item'>
            HTML, CSS3, SASS, BootStrap
          </li>
          <li className='cv-list-item'>
            JavaScript ES6
          </li>
          <li className='cv-list-item'>
            React, Redux
          </li>
          <li className='cv-list-item'>
            PHP, Node.JS, SQL, mySQL
          </li>
          <li className='cv-list-item'>
            Control de versiones con Git (GitHub, BitBucket, GitLab...)
          </li>
        </ul>

        <h2 className='cv-subtitle'>
          <MdLibraryBooks />
          Educación
        </h2>
        <ul className='cv-list'>
          <li className='cv-list-item'>
            Ciclo Formativo de Grado Superior de Administración de Sistemas Informáticos (Centro Salesiano "San Ignacio", Cádiz)
          </li>
          <li className='cv-list-item'>
            Introducción al Desarrollo Web - Certificado Profesional (Centres Innovació i Formació Ocupacional - CIFO, L'Hospitalet)
          </li>
          <li className='cv-list-item'>
            Desarrollo de Aplicaciones con Tecnología Web - Certificado Profesional (Grup Cief, Barcelona)
          </li>
        </ul>

        <h2 className='cv-subtitle'>
          <MdCode />
          Certificaciones
        </h2>
        <ul className='cv-list'>
          <li className='cv-list-item'>
            <div className='cv-list-item-certification'>
              Responsive Web Design (freeCodeCamp)
              <a href='https://www.freecodecamp.org/certification/JuanelopS/responsive-web-design' target='_blank'> 
                <MdArrowForward size={28} className='certificacion-arrow-icon'/>
              </a>
            </div>
          </li>
          <li className='cv-list-item'>
            <div className='cv-list-item-certification'>
              JavaScript Algorithms and Data Structures (freeCodeCamp).
              <a href='https://www.freecodecamp.org/certification/JuanelopS/javascript-algorithms-and-data-structures' target='_blank'> 
                <MdArrowForward size={28} className='certificacion-arrow-icon'/>
              </a>
            </div>
          </li>
          <li className='cv-list-item'>
            <div className='cv-list-item-certification'>
              Frond-End Web UI Frameworks and Tools: BootStrap 4 (Coursera - The Hong Kong University of Science and Technology)
              <a href='https://www.coursera.org/account/accomplishments/certificate/GUPZR73XQKV2' target='_blank'> 
                <MdArrowForward size={28} className='certificacion-arrow-icon'/>
              </a>
            </div>
          </li>
          <li className='cv-list-item'>
            <div className='cv-list-item-certification'>
              Version Control with Git (Coursera - Atlassian University).
              <a href='https://www.coursera.org/account/accomplishments/certificate/5JCPJQAVNR56' target='_blank'> 
                <MdArrowForward size={28} className='certificacion-arrow-icon'/>
              </a>
            </div>
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
