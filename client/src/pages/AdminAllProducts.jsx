import React, { useState, useEffect } from 'react'
import axios from 'axios'
const AdminAllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://localhost:4000/api/products');
            // setProducts(response.data);
            console.log(response.data);
        };
        
        fetchProducts();
    }, []);

  return (
    <div>
      <h1>All Products</h1>
    </div>
  )
}

export default AdminAllProducts
