import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
  <section className='NotFound'>
    <h1 className='NotFound-title'>404</h1>
    <p className='NotFound-message'>Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/" className='NotFound-button'>Retourner sur la page d’accueil</Link>
  </section>
);
};

export default NotFound;