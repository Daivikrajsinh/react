import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 bg-gradient-to-r from-gray-50 to-gray-100 py-10 px-5">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-10 tracking-wide drop-shadow-md">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div 
            key={item.id} 
            className="group mx-auto max-w-xs rounded-2xl p-6 shadow-lg bg-white hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out border border-gray-200 hover:border-blue-500 hover:bg-blue-50">
            <p className="text-2xl font-bold text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
              {item.id}
            </p>
            <p className="text-sm text-blue-500 uppercase tracking-widest group-hover:text-blue-700">
              {item.category}
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors duration-200">
              {item.title}
            </h3>
            <p className="line-clamp-2 text-gray-700 text-sm mt-1 group-hover:text-gray-800">
              {item.description}
            </p>
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-48 object-contain mt-3 rounded-md border border-gray-300 shadow-sm group-hover:shadow-md transition-all duration-300" 
            />
            <p className="text-lg font-bold text-green-600 mt-4 group-hover:text-green-800">
              <strong>Price: </strong>${item.price}
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200">
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowProducts;