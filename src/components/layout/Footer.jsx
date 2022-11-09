import './Footer.css';

export const Footer = () => {
  return (
    <footer className='footer'>
      <p>
        Juan Gavira { new Date().getFullYear() }  -  <a href='https://www.apache.org/licenses/LICENSE-2.0'>Apache License 2.0</a>
      </p>

    </footer>
  )
}


