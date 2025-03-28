import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [editIndex, setEditIndex] = useState("");
  const [boolean, setBoolean] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.trim() === "") {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((res) => setProducts(res))
        .catch((err) => console.error(err));
    } else {
      setProducts((prevProducts) =>
        prevProducts.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);
  

  function handleAdd(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(item) {
    setCart(cart.filter((deleteItem) => deleteItem != item));
  }

  function editFromCart(item) {
    setBoolean(true);
    setCart(products[item]);
    setEditIndex(item);
  }

  function handleCategory(e) {
    console.log(e.target.value);
    if (e.target.value === "all") {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        setProducts(res.data);
      });
    } else {
      let filterCategory = products.filter(
        (pro) => pro.category === e.target.value
      );
      setProducts(filterCategory);
    }
  }

  function handleSort() {
    let sortData = products.sort((a, b) => a.price - b.price);
    setProducts([...sortData]);
  }

  function handleSort2() {
    let sortData = products.sort((a, b) => b.price - a.price);
    setProducts([...sortData]);
  }

  function handleSearch() {
    if (search.trim() === "") {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((res) => setProducts(res))
        .catch((err) => console.error(err));
    } else {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  }
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
      <Navbar boolean={boolean} setBoolean={setBoolean} />
      
      
      <div className="container mx-auto px-4 mt-24 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <label className="text-gray-700 font-medium whitespace-nowrap">Filter by Category</label>
            <select
              onChange={handleCategory}
              className="w-full md:w-48 p-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="all">All Categories</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="jewelery">Jewelry</option>
              <option value="electronics">Electronics</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={handleSort}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Low to High
            </button>
            <button
              onClick={handleSort2}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              High to Low
            </button>
          </div>

          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <button
              onClick={handleSearch}
              className="absolute right-1 top-1 px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="p-4 h-48 flex items-center justify-center bg-gray-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-contain"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">${item.price}</span>
                  <button
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
                    onClick={() => handleAdd(item)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {boolean && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Your Cart ({cart.length})</h2>
                <button
                  onClick={() => setBoolean(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</h3>
                  <p className="mt-1 text-gray-500">Start adding some products!</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div key={index} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                        <div className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-20 w-20 object-contain"
                          />
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-medium text-gray-900 line-clamp-1">{item.title}</h4>
                          <p className="text-indigo-600 font-semibold">${item.price}</p>
                          <div className="mt-2 flex gap-2">
                            <button
                              onClick={() => editFromCart(item)}
                              className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded hover:bg-yellow-200 transition"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => removeFromCart(item)}
                              className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded hover:bg-red-200 transition"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total:</span>
                      <span>${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
                    </div>
                    <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-medium">
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default App;
