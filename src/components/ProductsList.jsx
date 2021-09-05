import React, { useState } from "react";
import Product from "./Product";

function ProductsList() {
  const [products, setproducts] = useState([
    {
      id: 0,
      title: "react.js",
      price: "15$",
      quantity: 1,
    },
    {
      id: 1,
      title: "vue.js",
      price: "12$",
      quantity: 2,
    },
    {
      id: 2,
      title: "node.js",
      price: "25$",
      quantity: 4,
    },
  ]);

  // functions
  const changeHandler = (e, id) => {
    const productsList = [...products];
    const filteredItem = productsList.find((p) => p.id === id);
    filteredItem.title = e.target.value;
    setproducts(productsList);
  };
  const quantityIncHandler = (id) => {
    const productsList = [...products];
    const filteredItem = productsList.find((p) => p.id === id);
    filteredItem.quantity++;
    setproducts(productsList);
  };
  const quantityDecHandler = (id) => {
    const productsList = [...products];
    const filteredItem = productsList.find((p) => p.id === id);
    if (filteredItem.quantity === 1) {
      removeItemHandler(id);
    } else {
      filteredItem.quantity--;
      setproducts(productsList);
    }
  };
  const removeItemHandler = (id) => {
    const productsList = [...products];
    const filteredList = productsList.filter((p) => p.id !== id);
    setproducts(filteredList);
  };

  // .. functions
  return (
    <div>
      {products.map((product) => {
        return (
          <Product
            product={product}
            key={product.id}
            changeHandler={changeHandler}
            increment={quantityIncHandler}
            decrement={quantityDecHandler}
            remove={removeItemHandler}
          />
        );
      })}
    </div>
  );
}

export default ProductsList;
