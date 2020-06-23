import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';

const TodoList = ({ products, destroyItem }) => (
  <>
    {products.map(product => (
      <ProductItem
        key={product.id}
        id={product.id}
        image={product.image}
        name={product.name}
        description={product.description}
        price={product.price}
        destroyItem={destroyItem}
      />
    ))}
  </>
);

export default TodoList;

TodoList.propTypes = {
  destroyItem: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
