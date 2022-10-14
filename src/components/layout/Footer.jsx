import './Footer.css';

export const Footer = () => {
  return (
    <footer className='footer'>
      { new Date().getFullYear() } Juan Gavira - Desarrollo Web &copy;
    </footer>
  )
}
