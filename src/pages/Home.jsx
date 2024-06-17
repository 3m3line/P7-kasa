import Banner from "@/components/Banner";

const Home = () => {
  return(
    <div className="content-page">
      <Banner 
        imageSrc="http://localhost:5173/SRC/assets/banniere-home.jpg"
        texte="Chez vous, partout et ailleurs"
      />
      {/* Autres contenus de la page */}
    </div>
  );
};

export default Home;