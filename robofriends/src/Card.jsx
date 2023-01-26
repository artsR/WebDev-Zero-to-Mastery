import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc bg-gris dib br3 pa3 ma2 grow bw2 shadow-3'>
    // <img alt='' src='https://cdn.midjourney.com/30e63dc0-1c18-41e1-b18d-ed8995575996/grid_0_640_N.webp' width={200} height={200} />
      <img alt='' src={`https://robohash.org/${id}?size=200x200&set=set4`} />
      <div>
          <h2>{name}</h2>
          <p>{email}</p>
      </div>
    </div>
    );
}

export default Card;
