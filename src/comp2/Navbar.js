import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../store/cartSlice";
import { searchFilter, typeNames } from "../store/cartSlice";
import { PRODUCTS } from "./product";

export default function Navbar() {
  const productNum = useSelector((state) => state.productCount.value);
  const cartNum = useSelector((state) => state.productCount.cartItems);
  const userName = useSelector((state) => state.productCount.userId);
  console.log("userName", userName);
  const [data, setData] = useState(PRODUCTS);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const num = cartNum.reduce((result, obj) => {
      // console.log(price);
      return result + obj.price;
    }, 0);
    // console.log(num);
    setTotal(num);
  }, [cartNum]);

  const searchPost = (searchString) => {
    if (searchString.length !== 0) {
      const searchEl = PRODUCTS.filter((el) => {
        if (searchString == el.name) {
          return el.name;
        }
      });
      dispatch(searchFilter(searchEl));
    } else {
      dispatch(searchFilter(data));
    }
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <nav className="navbar bg-primary">
            <div className="container-fluid">
              <div style={{ display: "flex", gap: "2em" }}>
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="about">
                  About
                </Link>

                <Link className="nav-link" to="blog">
                  Blog
                </Link>
              </div>
            </div>
          </nav>
          <input
            onChange={(e) => searchPost(e.target.value)}
            style={{ width: "32%" }}
            className="form-control me-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div style={{ display: "fle" }}>
            {/* <div>{productNum}</div> */}
            <button
              // style={{ marginTop: "134px" }}
              type="button"
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              {productNum}
              <img
                style={{ width: "`1em", height: "2em ", marginRight: "34px" }}
                src="/shopping_cart.svg"
              />
            </button>
            <Link to="/login">
              <img
                style={{ width: "`1em", height: "2em " }}
                src="/user_profile.svg"
              />
            </Link>
            {userName && (
              <h8>{userName[0].toUpperCase() + userName.substring(1)}</h8>
            )}
          </div>
          <div
            className="offcanvas offcanvas-start text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Dark offcanvas
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel"></h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {cartNum.map((value) => {
              return (
                <>
                  <div
                    className="modal-body"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={value.image}
                      style={{ height: "60px", width: "100px" }}
                      className="card-img-top"
                      alt="..."
                    />
                    <p>{value.name} </p>
                    <p>Rs-{value.price} </p>
                    <img
                      onClick={() => dispatch(removeProduct(value.id))}
                      type="button"
                      src="/delete.svg"
                      style={{ height: "32px" }}
                    />
                  </div>
                </>
              );
            })}

            <div className="modal-footer">
              <span>total Rs-{total}</span>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div>
      <nav classNameName="navbar navbar-dark bg-primary">
        <div classNameName="container-fluid">
          <a classNameName="navbar-brand" href="/">
            Navbar
          </a>
          <button
            classNameName="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button>
          <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
            <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
              <li classNameName="nav-item">
                <Link classNameName="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li classNameName="nav-item">
                <Link classNameName="nav-link" to="about">
                  About
                </Link>
              </li>

              <li classNameName="nav-item">
                <Link classNameName="nav-link" to="blog">
                  Blog
                </Link>
              </li>
            </ul>
            <form classNameName="d-flex" role="search">
              <input
                classNameName="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button classNameName="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div> */
}
