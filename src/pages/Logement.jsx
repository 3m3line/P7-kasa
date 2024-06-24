import { useParams, Navigate } from 'react-router-dom';
import StarRating from '@/components/Rating';
import Carousel from '@/components/Carousel';
import data from '../Logement.json';

const Logement = () => {
  const { id } = useParams();
  const logement = data.find(item => item.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <div className='content-page'>
<h1>Fiche de logement {id}</h1>
<Carousel pictures={logement.pictures} />
<StarRating rating={logement.rating} />
    </div>
  );
};

export default Logement;