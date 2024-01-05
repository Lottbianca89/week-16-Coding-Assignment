import { SelectionBackground } from 'phosphor-react';
import React from 'react';

const ActionFigures = () => {
  const actionFigures = [
    {
      id: 9,
      name: 'Awesome Action Figure 9',
      price: 39.99,
      description: 'This awesome action figure is perfect for imaginative play. With dynamic poses and detailed features, it sparks creativity and fun.',
      imgSrc: 'https://i.pinimg.com/originals/8e/2d/2c/8e2d2cd2cb0f4f884b8416032edcd560.jpg',
    },
    {
      id: 10,
      name: 'Awesome Action Figure 10',
      price: 39.99,
      description: 'Another fantastic action figure to enhance playtime adventures. It comes with exciting accessories and intricate design.',
      imgSrc: 'https://tse2.mm.bing.net/th?id=OIP.zkTuz2ymKnMqbOpQFndjjAHaNV&pid=Api&P=0&h=220',
    },
    {
      id: 11,
      name: 'Cool Hero Figure 11',
      price: 39.99,
      description: 'Let your child become a hero with this cool action figure. It features a sleek design and is ready for epic battles.',
      imgSrc: 'http://thebatmanuniverse.net/wp-content/uploads/2020/09/Batman-Black-12-Inch-Action-Figure.jpg',
    },
    {
      id: 12,
      name: 'Epic Warrior Figure 12',
      price: 39.99,
      description: 'Immerse in the world of fantasy with this epic warrior action figure. It has intricate armor and a powerful stance.',
      imgSrc: 'https://i.redd.it/04kflcmxcix51.jpg',
    }
  ];

  return (
    <div className="action-figure-list-container">
      {actionFigures.map((figure) => (
        <div key={figure.id} className="figure-item">
          <div className="figure-details">
            <h3>{figure.name}</h3>
            <p>{figure.description}</p>
          </div>
          <div className="image-column">
            <img src={figure.imgSrc} alt={`Action Figure ${figure.name}`} />
          </div>
          <p className="figure-price">Price: {figure.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
        </div>
      ))}
    </div>
  );
};

export default ActionFigures;