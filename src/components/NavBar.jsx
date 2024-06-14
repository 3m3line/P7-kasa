import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.png';

const NavBar = () => {
  return (
    <nav>
        <div>
            <img src={logo} alt="Logo de Kasa"/>
        </div>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">À propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;