import './Collapse.scss';
import React, { useState } from 'react';
import arrowCollapse from '../assets/arrow-collapse.png'

const Collapse = ({ collapseButton, collapseContenu }) => {
    const [visible, setVisible] = useState(false);
  
    return (
        <section className='collapse'>
            <div className='collapse_btn'
            onClick={()=> setVisible(!visible)}>
                <h2>
                {collapseButton}</h2>
                <img 
                src={arrowCollapse}
                alt='flèche'
                className={`collapse_arrow ${visible ? 'open':''}`}
                />
            </div>
            {visible && <div className='collapse-content'>{collapseContenu} </div>}
        </section>
    );
  };
  
  export default Collapse;