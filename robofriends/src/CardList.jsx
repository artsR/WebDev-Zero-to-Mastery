import React from 'react';
import Card from './Card';

const CardList = ({ midjourneyImages }) => {
  const cardComponent = midjourneyImages.map((user, i) => {
    return (
      <Card
        key={i}
        id={midjourneyImages[i].id}
        name={midjourneyImages[i].name}
        email={midjourneyImages[i].email}
      />
    );
  })

  return (
    <div>
      {cardComponent}
    </div>
  );
}

export default CardList;
