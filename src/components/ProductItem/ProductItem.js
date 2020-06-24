import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ id, name, image, description, price, isPined, destroyItem, handlePin }) => (
  <article
    className={
      isPined
        ? "products__card-pined"
        : "products__card"
    }>
    <img
      src={image}
      alt={name}
      className="products__card-image"
      width="160"
      height="134"
    />
    <div className="products__card-description">
      <h1 className="products__card-description-name">
        {description}
      </h1>
      <p className="products__card-description-code">
        {name}
      </p>
    </div>
    <div className="products__card-description-price">
      <p>Ціна:</p>
      <p className="products__card-description-price-sum">{price}$</p>
    </div>
    <button
        type="button"
        className="products__card-button button-destroy"
        onClick={() => destroyItem(id)}
    >
      Delete Product
    </button>
    <button
      type="button"
      className="products__card-button button-pin"
      id={id}
      onClick={() => handlePin(id)}
      checked={isPined}
    >
      Pin Product
    </button>
  </article>
);

export default TodoItem;

TodoItem.propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  destroyItem: PropTypes.func.isRequired,
  isPined: PropTypes.bool.isRequired,
  handlePin: PropTypes.func.isRequired,
}).isRequired;
