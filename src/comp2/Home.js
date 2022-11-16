import React, { useEffect, useState } from "react";
import { addProduct, removeProduct } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
// import store from "../store/store";
// import { PRODUCTS } from "./product";
// console.log(PRODUCTS);
export default function Home() {
  // const [data, setdata] = useState(PRODUCTS);
  const selectedProduct = useSelector((state) => state.productCount.cartItems);
  useSelector((state) => console.log(state));
  const selectValue = useSelector((state) => state.productCount.value);
  const dispatch = useDispatch();
  const searchProduct = useSelector(
    (state) => state.productCount.searchProduct
  );
  // console.log(selectValue);
  // console.log(state);
  // console.log(store.getState());

  // useEffect(()=>{

  // fetch("./product",{
  // method:"GET"})

  //     .then((Response) =>{ Response.json()
  //     console.log(Response)})
  // .then((actualData)=> // eslint-disable-next-line
  // // setdata(actualData= actualData))
  // console.log(actualData))
  // .catch((err)=>{

  // })
  // },[])

  const isItemExists = (productId) => {
    return selectedProduct.map((item) => item.id).indexOf(productId) >= 0;
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "1em 1em",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {searchProduct.map((item) => {
        // console.log(item);
        return (
          <div
            className="card"
            style={{ width: "16rem", marginTop: "34px" }}
            key={item.id}
          >
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p
                className="card-text"
                style={{ maxHeight: "7.5em", overflow: "scroll" }}
              >
                {item.description}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div className=" light">Rs-{item.price}</div>
                {isItemExists(item.id) ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(removeProduct(item.id))}
                  >
                    remove
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(addProduct(item))}
                  >
                    add to card
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
