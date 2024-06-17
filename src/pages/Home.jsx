import Banner from "@/components/Banner";
import CardLogt from "@/components/CardLogt";
import LogtList from '../Logement.json';
import './Home.scss';

const Home = () => {
  return(
    <div className="content-page">
      <Banner 
        imageSrc="./SRC/assets/banniere-home.jpg"
        texte="Chez vous, partout et ailleurs"
      />
      <section className="LogtEncart">
        {LogtList.map((item) => (
          <CardLogt
            key={item.id}
            imageSrc={item.cover}
            texte={item.title}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;