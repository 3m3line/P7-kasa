import './CardLogt.scss';

const CardLogt = ({ imageSrc, texte }) => {
    const coverStyle ={
        backgroundImage: `url(${imageSrc})`,
    }
    return (
      <div className='CardLogt_img' style={coverStyle}>
        <div className='overlayLogt'></div>
        <h2 className='CardLogt_texte'>{texte}</h2>
      </div>
    );
  };
  
  export default CardLogt;
