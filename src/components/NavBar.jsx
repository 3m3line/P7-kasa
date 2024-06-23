import { NavLink } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import './NavBar.scss';

const NavBar = () => {
  return (
    <nav>
        <div>
            <img src={logo} alt="Logo de Kasa"/>
        </div>
      <ul>
        <li>
        <NavLink to="/" end activeclassname="active">
            Accueil
          </NavLink>
        </li>
        <li>
        <NavLink to="/about" activeclassname="active">
            À propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;