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
<div className="flex text-center   mt-20">
<div className=" h-20  p-4 bg-white shadow-lg rounded-xl items-center  text-center flex gap-6">
 
 <div className="flex  gap-2">
   <label className="text-gray-700 font-semibold">Filter by Category</label>
   <select
     onChange={handleCategory}
     className="p-3 border w-21 border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
   >
     <option value="all">All</option>
     <option value="men's clothing">MEN'S CLOTHING</option>
     <option value="jewelery">JEWELRY</option>
     <option value="electronics">ELECTRONICS</option>
     <option value="women's clothing">WOMEN'S CLOTHING</option>
   </select>
 </div>

 <div className="flex flex-wrap gap-4">
   <button
     onClick={handleSort}
     className="button-low"   
   >
     Low to High
   </button>
   <button
     onClick={handleSort2}

      className="button-high"
   >
     High to Low
   </button>
 </div>
</div>


     <div className="flex items-center gap-2 w-125 border h-15 border-gray-300 rounded-lg p-2 focus-within:ring-2 focus-within:ring-blue-400">
       <input
         type="text"
         placeholder="Search..."
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         className="w-full p-2  text-gray-700"
       />
       <button
         onClick={handleSearch}
         className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
       >
         Search
       </button>
     </div>
</div>
    

      <div className="flex">
        <div className="grid grid-cols-[repeat(3,1fr)] gap-5">
          {products.map((item) => (
            <div
              key={item.id}
              className="mx-auto max-w-sm p-6 shadow-lg rounded-xl"
            >
              <p className="text-3xl">{item.id}</p>
              <p className="text-xl text-blue-600 uppercase">{item.category}</p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="line-clamp-2">{item.description}</p>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-50 object-contain"
              />
              <p className="text-lg font-semibold text-green-600">
                <strong>Price: </strong>${item.price}
              </p>
              <button
                className="w-full bg-red-500 text-white py-2 mt-2 rounded-lg hover:bg-red-700"
                onClick={() => handleAdd(item)}
              >
                ADD TO CART
              </button>
            </div>
          ))}
        </div>

        <div className="w-[300px] h-screen border-l border-gray-300 fixed right-0 p-4 bg-white overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="p-2 border-b border-gray-200">
                <p className="text-3xl">{item.id}</p>
                <h4 className="font-medium">{item.title}</h4>
                <p className="line-clamp-2">{item.description}</p>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-50 object-contain"
                />
                <p className="text-lg font-semibold text-green-600">
                  <strong>Price: </strong>${item.price}
                </p>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                  onClick={() => editFromCart(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition ml-2"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default App;
