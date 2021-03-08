import React from 'react';
import PropTypes from 'prop-types';

import './cards.scss';

function Card({ title, imageSource, url, description }) {
  console.log(title);
  return (
    <div className='card text-center bg-dark h-100 animate__animated animate__fadeInDown'>
      <figure className='overflow'>
        <img src={imageSource} alt='' className='img-fluid card-img-top' />
      </figure>
      <div className='card-body text-light'>
        <h4 className='card-title mt-3'>{title}</h4>
        <p className='card-text'>{description}</p>
        <a className='btn text-light bg-dark rounded-0' href={url} target='_blank' noreferrer noopener>
          Ver más
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
