import '../../styles/Footer.css';
import reacticon from '../../assets/img/languages/react.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <p>
          Juan Gavira { new Date().getFullYear() }  -  <a href='https://www.apache.org/licenses/LICENSE-2.0'>Apache License 2.0</a>
        </p>
        <p>
          Este portfolio ha sido desarrollado íntegramente con &nbsp;
          <a href='https://reactjs.org/' target='_blank' className='react-link'>
            React.js
          </a> &nbsp;
          <img src={ reacticon } style={{width: '28px', verticalAlign: 'middle'}}/>
        </p>
      </div>
    </footer>
  )
}


