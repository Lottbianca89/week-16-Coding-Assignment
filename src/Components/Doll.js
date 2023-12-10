// Doll.js
import React from 'react';
import ReviewForm from './DollReviewForm';
import ReviewList from './ReviewList';

const Doll = ({ doll, addReview }) => {

  const rating = calcDollRating(doll.reviews);

  return (
    <article key={doll.id}>
      <h3>{doll.title} - {doll.year}</h3>
      <header>
        <img className="thumbnail" src={doll.imgSrc} alt={doll.title} />
        <div className="details">
          <p>{doll.synopsis}</p>
          <ul>{doll.categories.map((category, index) => <li key={index}>{category}</li>)}</ul>
        </div>
      </header>
      <aside>
        <ReviewList reviews={doll.reviews} />
        <ReviewForm dollID={doll.id} addReview={addReview} />
      </aside>
    </article>
  );
};

export default Doll;