import Banner from "@/components/Banner";
import CardLogt from "@/components/CardLogt";
import LogtList from '../Logement.json';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div className="content-page">
      <Banner 
        imageSrc="./SRC/assets/banniere-home.jpg"
        texte="Chez vous, partout et ailleurs"
      />
      <section className="LogtEncart">
        {LogtList.map((item) => (
          <Link to={`/logement/${item.id}`} key={item.id}>
            <CardLogt
              imageSrc={item.cover}
              texte={item.title}
            />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;