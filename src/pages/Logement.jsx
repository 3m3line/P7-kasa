import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import StarRating from '@/components/Rating';
import Carousel from '@/components/Carousel';
import Collapse from '@/components/Collapse';
import data from '../Logement.json';
import './Logement.scss'

const formatHostName = (name) => {
  return name.split(' ').map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < name.split(' ').length - 1 && <br />}
    </React.Fragment>
  ));
};

const Logement = () => {
  const { id } = useParams();
  const logement = data.find(item => item.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <div className='logt-page'>
      <Carousel pictures={logement.pictures} />
      <section className='property-logt'>
        <div className='TitleTag-logt'>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className='tag-logt'>{logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}</div>
        </div>
        <div className='HostRating-logt'>
          <div className='host-logt'>
            <p>{formatHostName(logement.host.name)}</p>
            <img src={logement.host.picture} alt="Photo hote" />
          </div>
          <StarRating rating={logement.rating} />
        </div>
      </section>
      <div className='detail-logt'>
        <Collapse
          collapseButton="Description"
          collapseContenu= {logement.description}/>
        <Collapse
          collapseButton="Équipements"
          collapseContenu={logement.equipments.map((equipment, index) => (
            <p key={index}>{equipment}</p>
          ))}
        />
      </div>
    </div>
  );
};

export default Logement;