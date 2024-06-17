import './Banner.scss';

const Banner = ({ imageSrc, texte }) => {
    const bannerStyle = {
      backgroundImage: `url(${imageSrc})`,
    };
  
    return (
      <div className="banner" style={bannerStyle}>
        <div className="overlay"></div>
        <h1 className="text">{texte}</h1>
      </div>
    );
  };
  
  export default Banner;