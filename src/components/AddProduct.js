import React, { useState } from "react";

const AddProduct = () => {
  const [data, setData] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [productImages, setProductImages] = useState([]);

  const [error, setError] = useState(false);

  const handleMultipleImages = (e) => {
    const choosenFIles = Array.prototype.slice.call(e.target.file);
    setProductImages(choosenFIles);
  };
  // Adding product to the backend api :
  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!productName || !price || !category || !company) {
      setError(true);
      return false;
    } else {
      const myData = {
        productName,
        price,
        category,
        company,
        productImages,
      };
      // setData([...data, myData]);
      console.log("data", myData);
      // getting userId from local storage :
      const userId = JSON.parse(localStorage.getItem("user"))._id;
      console.warn("userId", userId);
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("company", company);
      formData.append("productImages", productImages);

      formData.append("userId", userId);
      let result = await fetch("http://localhost:5000/add-product", {
        method: "Post",
        body: formData,
      });
      result = await result.json();
      console.warn("result", result);
    }
  };
  console.log("data", data);
  return (
    <div className="add-products">
      <h1>Add Product</h1>
      <form onSubmit={handleAddProduct}>
        <div className="input-data">
          <input
            className="inputBox"
            type="text"
            name="productName"
            placeholder="Enter product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          {error && !productName && <p className="error">Enter a valid product name</p>}
        </div>
        <div className="input-data">
          <input
            className="inputBox"
            type="text"
            name="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {error && !price && <p className="error">Enter a valid price</p>}
        </div>
        <div className="input-data">
          <input
            className="inputBox"
            type="text"
            name="category"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {error && !category && <p className="error">Enter a category</p>}
        </div>
        <div className="input-data">
          <input
            className="inputBox"
            type="text"
            name="company"
            placeholder="Enter brand name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          {error && !company && <p className="error">Enter a company</p>}
        </div>
        <div className="input-data">
          <input type="file" name="productImages" className="inputBox" onChange={(e) => handleMultipleImages(e)} />
        </div>
        <button className="appButton" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
