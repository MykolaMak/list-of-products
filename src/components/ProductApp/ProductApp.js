import React from 'react';
import ProductList from '../ProductList/ProductList';

class TodoApp extends React.Component {
  state = {
    products: [
      {
        id: 0,
        image: 'https://mykolamak.github.io/layout_catalog/images/imac.jpeg',
        name: 'Apple monoblock',
        description: 'APPLE A1419 iMac 27" Retina 5K',
        price: '1000'
      },
      {
        id: 1,
        image: 'https://mykolamak.github.io/layout_catalog/images/imac.jpeg',
        name: 'Apple monoblock',
        description: 'APPLE A1419 iMac 27" Retina 5K',
        price: '1000'
      },
      {
        id: 2,
        image: 'https://mykolamak.github.io/layout_catalog/images/imac.jpeg',
        name: 'Apple monoblock',
        description: 'APPLE A1419 iMac 27" Retina 5K',
        price: '1000'
      },
      {
        id: 3,
        image: 'https://mykolamak.github.io/layout_catalog/images/imac.jpeg',
        name: 'Apple monoblock',
        description: 'APPLE A1419 iMac 27" Retina 5K',
        price: '1000'
      },
      {
        id: 4,
        image: 'https://mykolamak.github.io/layout_catalog/images/imac.jpeg',
        name: 'Apple monoblock',
        description: 'APPLE A1419 iMac 27" Retina 5K',
        price: '1000'
      },
      {
        id: 5,
        image: 'https://mykolamak.github.io/layout_catalog/images/imac.jpeg',
        name: 'Apple monoblock',
        description: 'APPLE A1419 iMac 27" Retina 5K',
        price: '1000'
      },
    ],
    newProductImage: '',
    newProductName: '',
    newProductDescription: '',
    newProductPrice: '',
  }

  handleProductImage = (event) => {
    this.setState({
      newProductImage: event.target.value,
    });
  }

  handleProductName = (event) => {
    this.setState({
      newProductName: event.target.value,
    });
  }

  handleProductDescription = (event) => {
    this.setState({
      newProductDescription: event.target.value,
    });
  }

  handleProductPrice = (event) => {
    this.setState({
      newProductPrice: event.target.value,
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { newProductImage, newProductName, newProductDescription, newProductPrice } = this.state;

    if (newProductImage.trim() === '' && newProductName.trim() === '' && newProductDescription.trim() === '' && newProductPrice.trim() === '') {
      return;
    }

    this.setState((prev) => {
      const newTodo = {
        id: +new Date(),
        image: prev.newProductImage,
        name: prev.newProductName,
        description: prev.newProductDescription,
        price: prev.newProductPrice
      };

      return {
        products: [...prev.products, newTodo],
        newProductImage: '',
        newProductName: '',
        newProductDescription: '',
        newProductPrice: '',
      };
    });
  };

  destroyItem = (productId) => {
    this.setState(prev => ({
      products: prev.products.filter(product => product.id !== productId),
    }));
  }

  render() {
    const { products, newProductName, newProductImage, newProductDescription, newProductPrice } = this.state;
    const { handleFormSubmit, handleProductImage, handleProductName, handleProductDescription, handleProductPrice} = this;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>Products</h1>

          <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Type product Image URL"
                value={newProductImage}
                onChange={handleProductImage}
              />
              <input
                type="text"
                placeholder="Type product name"
                value={newProductName}
                onChange={handleProductName}
              />
              <input
                type="text"
                placeholder="Type product description"
                value={newProductDescription}
                onChange={handleProductDescription}
              />
              <input
                type="text"
                placeholder="Type product price"
                value={newProductPrice}
                onChange={handleProductPrice}
              />
              <button type="submit">
              Add new Product
              </button>
            </form>
        </header>

        <section className="main products">
          <ProductList
            products={products}
            destroyItem={this.destroyItem}
          />
        </section>
      </section>
    );
  }
}

export default TodoApp;
