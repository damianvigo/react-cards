import React from 'react';

function Card({title, imageSource, url}) {
  console.log(title)
  return (
    <div className='card text-center bg-dark'>
      <img src={imageSource} alt='' className='img-fluid' />
      <div className='card-body text-light'>
        <h4 className='card-title mt-3'>{title}</h4>
        <p className='card-text text-secondary'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officia, vero sint quo eveniet qui perspiciatis deleniti eius nemo
          nostrum? Alias numquam temporibus, laudantium optio pariatur itaque enim dolorem! Nihil.
        </p>
        <a className='btn btn-outline-secondary rounded-0' href={url} target='_blank' noreferrer noopener>
          Go to this website
        </a>
      </div>
    </div>
  );
}

export default Card;
