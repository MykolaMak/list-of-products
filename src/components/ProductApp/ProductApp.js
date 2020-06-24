import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

class ProductApp extends React.Component {
  state = {
    products: [
      {
        id: 0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMw1KTsk0IdX-hk9UGYtk6Wzosj9JFUDUG8wpueoOpsCJ_S8a5&usqp=CAU',
        name: 'MTB Street 1',
        description: 'NS Bikes Co.',
        price: '1000',
        order: 0,
        isPined: false
      },
      {
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMw1KTsk0IdX-hk9UGYtk6Wzosj9JFUDUG8wpueoOpsCJ_S8a5&usqp=CAU',
        name: 'MTB Street 2',
        description: 'NS Bikes Co.',
        price: '1000',
        order: 0,
        isPined: false
      },
      {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMw1KTsk0IdX-hk9UGYtk6Wzosj9JFUDUG8wpueoOpsCJ_S8a5&usqp=CAU',
        name: 'MTB Street 3',
        description: 'NS Bikes Co.',
        price: '1000',
        order: 0,
        isPined: false
      },
      {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMw1KTsk0IdX-hk9UGYtk6Wzosj9JFUDUG8wpueoOpsCJ_S8a5&usqp=CAU',
        name: 'MTB Street 4',
        description: 'NS Bikes Co.',
        price: '1000',
        order: 0,
        isPined: false
      },
      {
        id: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMw1KTsk0IdX-hk9UGYtk6Wzosj9JFUDUG8wpueoOpsCJ_S8a5&usqp=CAU',
        name: 'MTB Street 5',
        description: 'NS Bikes Co.',
        price: '1000',
        order: 0,
        isPined: false
      },
      {
        id: 5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMw1KTsk0IdX-hk9UGYtk6Wzosj9JFUDUG8wpueoOpsCJ_S8a5&usqp=CAU',
        name: 'MTB Street 6',
        description: 'NS Bikes Co.',
        price: '1000',
        order: 0,
        isPined: false
      },
    ],
    newProductImage: '',
    newProductName: '',
    newProductDescription: '',
    newProductPrice: '',
    searchValue: '',
    pinedId: ''
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

  handleSearchValue = (event) => {
    this.setState({
      searchValue: event.target.value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { newProductImage, newProductName, newProductDescription, newProductPrice } = this.state;

    if ((newProductImage.trim() === '') || (newProductName.trim() === '') || (newProductDescription.trim() === '') || (newProductPrice.trim() === '')) {
      return;
    }

    this.setState((prev) => {
      const newTodo = {
        id: +new Date(),
        image: prev.newProductImage,
        name: prev.newProductName,
        description: prev.newProductDescription,
        price: prev.newProductPrice,
        order: 0,
        isPined: false
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

  handlePin = (productId) => {
    if (this.state.pinedId === productId) {
      return;
    }
    this.setState(prev => ({
      pinedId: productId,
      products: prev.products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            isPined: true,
            order: 1,
          }
        }
        return {
          ...product,
          isPined: false,
          order: 0
        };
      }),
    }));
  }

  render() {
    const {
      products,
      newProductName,
      newProductImage,
      newProductDescription,
      newProductPrice,
      searchValue
    } = this.state;
    const {
      handleFormSubmit,
      handleProductImage,
      handleProductName,
      handleProductDescription,
      handleProductPrice,
      handleSearchValue,
      destroyItem,
      handlePin
    } = this;
    const filteredProducts = products.filter(product => (product.name + product.description).includes(searchValue)).sort((a,b) => b.order - a.order);

    return (
      <section className="app">
        <header className="app__header">
          <h1 className="app__header-name">Products App</h1>
          <form
            onSubmit={handleFormSubmit}
            className="app__header-form"
          >
            <input
              className="app__header-input"
              type="text"
              placeholder="Type product Image URL"
              value={newProductImage}
              onChange={handleProductImage}
            />
            <input
              className="app__header-input"
              type="text"
              placeholder="Type product name"
              value={newProductName}
              onChange={handleProductName}
            />
            <input
              className="app__header-input"
              type="text"
              placeholder="Type product description"
              value={newProductDescription}
              onChange={handleProductDescription}
            />
            <input
              className="app__header-input"
              type="text"
              placeholder="Type product price"
              value={newProductPrice}
              onChange={handleProductPrice}
            />
            <button type="submit">
            Add new Product
            </button>
          </form>
          <input
            className="app__header-input-search"
            type="text"
            placeholder="Type to search"
            value={searchValue}
            onChange={handleSearchValue}
          />
        </header>

        <main className="main__content">
          <section className="products">
            {filteredProducts.length === 0 ? <p>There are no products!</p> : ''}
            {filteredProducts.map(product => (
              <ProductItem
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
                pined={product.isPined}
                handlePin={handlePin}
                destroyItem={destroyItem}
              />
            ))}
          </section>
        </main>
      </section>
    );
  }
}

export default ProductApp;
