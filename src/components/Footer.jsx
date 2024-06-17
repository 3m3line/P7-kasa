import logo from '../assets/LOGO-blanc.png';
import './Footer.scss';

const Footer = () => {
    return (
      <footer>
        <img src={logo} alt="Logo de Kasa"/>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  };
  
  export default Footer;
