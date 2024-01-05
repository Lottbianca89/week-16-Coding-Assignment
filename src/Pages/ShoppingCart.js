import React, { useState } from 'react';

const ShoppingCartItem = ({ item, removeFromCart, updateCartItemCount }) => {
  const { id, name, quantity, image, price, description } = item;

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={image} alt={name} />
      </div>
      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="item-description">{description}</span>
      </div>
      <div className="item-price">
        <span>Price: ${price}</span>
      </div>
      <div className="item-quantity">
        <span>Quantity: {quantity}</span>
        <div className="quantity-buttons">
          <button className="cart-button" onClick={() => updateCartItemCount(id, quantity + 1)}>
            +
          </button>
          <button className="cart-button" onClick={() => updateCartItemCount(id, Math.max(quantity - 1, 0))}>
            -
          </button>
        </div>
      </div>
      <div className="item-actions">
        <button className="cart-button" onClick={() => removeFromCart(id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

const ShoppingContainer = ({ cartItems, removeFromCart, updateCartItemCount, handlePurchase, calculateTotalPrice }) => {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <div className="cart-header">
            <div className="column-header">Image</div>
            <div className="column-header">Doll</div>
            <div className="column-header">Price</div>
            <div className="column-header">Quantity</div>
            <div className="column-header">Actions</div>
          </div>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <ShoppingCartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                updateCartItemCount={updateCartItemCount}
              />
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total Items: {totalQuantity}</p>
            <p>Total Price: ${calculateTotalPrice(cartItems)}</p>
            <button className="purchase-button" onClick={handlePurchase}>
              Purchase
            </button>
          </div>
        </div>
      ) : (
        <p className="empty-cart-message">No items in the cart</p>
      )}
    </div>
  );
};

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const availableItems = [
    {
      id: 1,
      name: 'Lovely Doll 1',
      price: 39.99,
      description: 'This lovely doll is perfect for children of all ages. With a soft and huggable design, it brings joy and companionship.',
      image: 'https://images-na.ssl-images-amazon.com/images/I/91r8ptWyT3L.jpg',
    },
    {
      id: 2,
      name: 'Lovely Doll 2',
      price: 39.99,
      description: 'This lovely doll is perfect for children of all ages. With a soft and huggable design, it brings joy and companionship.',
      image: 'https://imagehost.vendio.com/a/35182154/aview/BFXF03B.JPG',
    },
    {
      id: 3,
      name: 'Lovely Doll 3',
      price: 39.99,
      description: 'This lovely doll is perfect for children of all ages. With a soft and huggable design, it brings joy and companionship.',
      image: 'https://i.pinimg.com/originals/e9/ea/ec/e9eaec50f6d373d173b2979441aa7f6e.jpg',
    },
    {
      id: 4,
      name: 'Lovely Doll 4',
      price: 39.99,
      description: 'This lovely doll is perfect for children of all ages. With a soft and huggable design, it brings joy and companionship.',
      image: 'https://i.pinimg.com/originals/34/6a/4f/346a4fd292e8ae0f20c28673984ec157.jpg',
    },
  ];

  const Christmasdolls = [
    {
      id: 5,
      name: 'Lovely Doll 5',
      price: 39.99,
      description: 'This lovely doll is perfect for children of all ages. With a soft and huggable design, it brings joy and companionship.',
      image: 'https://i.pinimg.com/474x/65/a9/f0/65a9f06379570d2e47b986cfe0cc1160.jpg',
    },
    {
      id: 6,
      name: 'Lovely Doll 6',
      price: 39.99,
      description: 'This lovely doll is perfect for children of all ages. With a soft and huggable design, it brings joy and companionship.',
      image: 'https://i.pinimg.com/originals/45/38/0f/45380f86ee7e9417f14e422a32c3b393.jpg',
    },
    {
      id: 7,
      name: 'Lovely Doll 7',
      price: 39.99,
      description: 'This lovely doll is perfect for children of all ages. With a soft and huggable design, it brings joy and companionship.',
      image: 'https://i.pinimg.com/474x/75/7f/40/757f40da240e8f7978118aebe0164f15--asian-doll-black-barbie.jpg',
    },
    {
      id: 8,
      name: 'Lovely Doll 8',
      price: 39.99,
      description: 'This lovely doll is perfect for children of all ages. With a soft and huggable design, it brings joy and companionship.',
      image: 'https://i.pinimg.com/originals/ff/18/f4/ff18f41686c440788f6db6e8d5015df9.jpg',
    },
  ];

  const ActionFigures = [
    {
      id: 9,
      name: 'Awesome Action Figure 1',
      price: 39.99,
      description: 'This awesome action figure is perfect for imaginative play. With dynamic poses and detailed features, it sparks creativity and fun.',
      image: 'https://i.pinimg.com/originals/8e/2d/2c/8e2d2cd2cb0f4f884b8416032edcd560.jpg',
    },
    {
      id: 10,
      name: 'Awesome Action Figure 2',
      price: 39.99,
      description: 'Another fantastic action figure to enhance playtime adventures. It comes with exciting accessories and intricate design.',
      image: 'https://tse2.mm.bing.net/th?id=OIP.zkTuz2ymKnMqbOpQFndjjAHaNV&pid=Api&P=0&h=220',
    },
    {
      id: 11,
      name: 'Cool Hero Figure 3',
      price: 39.99,
      description: 'Let your child become a hero with this cool action figure. It features a sleek design and is ready for epic battles.',
      image: 'http://thebatmanuniverse.net/wp-content/uploads/2020/09/Batman-Black-12-Inch-Action-Figure.jpg',
    },
    {
      id: 12,
      name: 'Epic Warrior Figure 4',
      price: 39.99,
      description: 'Immerse in the world of fantasy with this epic warrior action figure. It has intricate armor and a powerful stance.',
      image: 'https://i.redd.it/04kflcmxcix51.jpg',
    },
  ];
  
  const allItems = [...availableItems, ...Christmasdolls, ...ActionFigures];

  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  const addToCart = (itemName) => {
    const itemExists = cartItems.find((item) => item.name === itemName);

    if (itemExists) {
      const updatedCart = cartItems.map((item) =>
        item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
      setTotalPrice(calculateTotalPrice(updatedCart));
    } else {
      const newItem = {
        id: cartItems.length + 1,
        name: itemName,
        quantity: 1,
        image: 'default-image.jpg',
        price: 39.99,
        description: 'No description',
      };
      setCartItems([...cartItems, newItem]);
      setTotalPrice(calculateTotalPrice([...cartItems, newItem]));
    }

    alert(`${itemName} added to the cart!`);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    setTotalPrice(calculateTotalPrice(updatedCart));
  };

  const updateCartItemCount = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    setTotalPrice(calculateTotalPrice(updatedCart));
  };

  const handlePurchase = () => {
    setCartItems([]);
    setTotalPrice(0);
    alert('Thanks For Shopping with us!');
  };

  return (
    <div className="shopping-container">
      <div className="items-list">
        <h2>Available Items</h2>
        <ul>
          {allItems.map((item) => (
            <li key={item.id}>
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-description">{item.description}</p>
                <p className="item-price">${item.price}</p>
                <button onClick={() => addToCart(item.name)}>Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="cart-section">
        <ShoppingContainer
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateCartItemCount={updateCartItemCount}
          handlePurchase={handlePurchase}
          calculateTotalPrice={calculateTotalPrice}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;