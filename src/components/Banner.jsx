import './Banner.scss';

const Banner = ({ imageSrc, texte }) => {
    const bannerStyle = {
      backgroundImage: `url(${imageSrc})`,
    };
    const hasTexte= texte && texte.trim().length > 0;
  
    return (
      <div className="banner" style={bannerStyle}>
        <div className={`overlay ${hasTexte ? 'dark':'light'}`}></div>
        {hasTexte && <h1 className="text">{texte}</h1>}
      </div>
    );
  };
  
  export default Banner;