import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/features/productSlice";

const App = () => {
  const productData = useSelector((state) => {
    return state.productData;
  });
  const dipatch = useDispatch();

  useEffect(() => {
    dipatch(fetchProducts());
  }, []);
  console.log(productData);
  return (
    <div>
      <h1>{productData.error ? productData.error : "feteched succesful"}</h1>
      {productData.product &&
        productData.product.map((prod) => (
          <div key={prod.id}>
            <p>{prod.title}</p>
          </div>
        ))}
    </div>
  );
};

export default App;
