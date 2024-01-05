import React from 'react';

const DollList = () => {
  const dolls = [
    {
      id: 1,
      name: 'Lovely Doll 1',
      price: 39.99,
      description: 'This lovely doll is perfect for children of all ages. With lovely designs, it brings joy and companionship.',
      imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/91r8ptWyT3L.jpg',
    },
    {
      id: 2,
      name: 'Lovely Doll 2',
      price: 39.99,
      description: 'This lovely doll is perfect for children of all ages. With lovely designs, it brings joy and companionship.',
      imgSrc: 'https://imagehost.vendio.com/a/35182154/aview/BFXF03B.JPG',
    },
    {
      id: 3,
      name: 'Lovely Doll 3',
      price: 39.99,
      description: 'This lovely doll is perfect for children of all ages. With lovely designs, it brings joy and companionship',
      imgSrc: 'https://i.pinimg.com/originals/e9/ea/ec/e9eaec50f6d373d173b2979441aa7f6e.jpg',
    },
    {
      id: 4,
      name: 'Lovely Doll 4',
      price: 39.99,
      description: 'This lovely doll is perfect for children of all ages. With lovely designs, it brings joy and companionship.',
      imgSrc: 'https://i.pinimg.com/originals/34/6a/4f/346a4fd292e8ae0f20c28673984ec157.jpg',
    },
  ];

  return (
    <div className="doll-list-container">
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
    </div>
  );
};

export default DollList;
