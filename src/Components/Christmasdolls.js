import React from 'react';

const Christmasdolls = () => {
  const dolls = [
    {
      id: 5,
      name: 'Lovely Doll 5',
      price: 39.99,
      description: 'This lovely doll is perfect for children of all ages. With a soft and huggable design, it brings joy and companionship.',
      imgSrc: 'https://i.pinimg.com/474x/65/a9/f0/65a9f06379570d2e47b986cfe0cc1160.jpg',
    },
    {
      id: 6,
      name: 'Lovely Doll 6',
      price: 39.99,
      description: 'This lovely doll is perfect for children of all ages. With a soft and huggable design, it brings joy and companionship.',
      imgSrc: 'https://i.pinimg.com/originals/45/38/0f/45380f86ee7e9417f14e422a32c3b393.jpg',
    },
    {
      id: 7,
      name: 'Lovely Doll 7',
      price: 39.99,
      description: 'This lovely doll is perfect for children of all ages. With a soft and huggable design, it brings joy and companionship.',
      imgSrc: 'https://i.pinimg.com/474x/75/7f/40/757f40da240e8f7978118aebe0164f15--asian-doll-black-barbie.jpg',
    },
    {
      id: 8,
      name: 'Lovely Doll 8',
      price: 39.99,
      description: 'This lovely doll is perfect for children of all ages. With a soft and huggable design, it brings joy and companionship.',
      imgSrc: 'https://i.pinimg.com/originals/ff/18/f4/ff18f41686c440788f6db6e8d5015df9.jpg',
    },
  ];

  return (
    <div className="doll-list">
      {dolls.map((doll) => (
        <div key={doll.id} className="doll-item">
          <div className="doll-details">
            <h3>{doll.name}</h3>
            <p>{doll.description}</p>
          </div>
          <div className="image-column">
            <img src={doll.imgSrc} alt={`Doll ${doll.name}`} />
          </div>
          <p className="doll-price">Price: {doll.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
        </div>
      ))}
    </div>
  );
};

export default Christmasdolls;