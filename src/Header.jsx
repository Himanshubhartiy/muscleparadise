import React from "react";
import Home from "./Home";
// import Footer from "./Footer";
function Header() {
  return (
    <>
      <div className="banner">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand fs-3  text-white" href="#">
              MuscleParadise
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2">
                <li className="nav-item me-2">
                  <a
                    className="nav-link fs-5 text-white"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item me-2">
                  <a
                    className="nav-link  text-white fs-5"
                    aria-current="page"
                    href="#product__section"
                  >
                    Products
                  </a>
                </li>
                <li className="nav-item me-2 ">
                  <a
                    className="nav-link fs-5  text-white"
                    aria-current="page"
                    href="#about__section"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item me-2">
                  <a
                    className="nav-link fs-5  text-white"
                    aria-current="page"
                    href="#contact__section"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <a
                  to={`/login`}
                  className="btn btn-dark ms-2 mb-2 text-decoration-none text-white  fs-5"
                >
                  Sign-in
                </a>
                <a
                  to={`/signup`}
                  className="btn btn-dark ms-2 mb-2 text-decoration-none text-white  fs-5"
                >
                  Sign-up
                </a>
              </ul>
            </div>
          </div>
        </nav>
        <Home></Home>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
}

export default Header;
