import React, { useEffect, useState } from "react";

const ProductsList = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = async () => {
    let result = await fetch("http://localhost:5000/all-products");
    result = await result.json();
    setAllProducts(result);
  };
  console.warn("proudcts", allProducts);
  return <div>ProductsList</div>;
};

export default ProductsList;
