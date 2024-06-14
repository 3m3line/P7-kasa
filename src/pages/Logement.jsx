import { useParams } from 'react-router-dom';

const Logement = () => {
  const { id } = useParams();
  return <h1>Fiche de logement {id}</h1>;
};

export default Logement;