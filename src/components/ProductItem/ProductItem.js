import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ id, name, image, description, price, destroyItem }) => (
  <article class="products__card" data-qa="card">
    <img
      src={image}
      alt="iMac."
      class="products__card-image"
      width="160"
      height="134"
    />
    <div class="products__card-description">
      <h1 class="products__card-description-name">
        {description}
      </h1>
      <p class="products__card-description-code">
        {name}
      </p>
    </div>
    <div class="products__card-description-price">
      <p>Цена:</p>
      <p class="products__card-description-price-sum">{price}</p>
    </div>
    <button
        class="products__card-button-link"
        type="button"
        className="destroy"
        onClick={() => destroyItem(id)}
    >
      Delete Product
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
}).isRequired;
