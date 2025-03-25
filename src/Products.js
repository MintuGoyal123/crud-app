import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://65.1.92.213:8080/api/products");
      setProducts(response.data);
    } catch (error) {
      alert("Failed to fetch products");
    }
  };

  const addProduct = async () => {
    try {
      await axios.post("http://65.1.92.213:8080/api/products", { name, price, qty });
      fetchProducts();
    } catch (error) {
      alert("Failed to add product");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://65.1.92.213:8080/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      alert("Failed to delete product");
    }
  };

  return (
    <div>
      <h2>Products</h2>
      <input type="text" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="number" placeholder="Quantity" value={qty} onChange={(e) => setQty(e.target.value)} />
      <button onClick={addProduct}>Add Product</button>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} - {product.qty}{" "}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;