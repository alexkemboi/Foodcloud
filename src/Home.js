import React from 'react';
import groceriesImage from './Images/groceries.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home(){
    return (
        <>
          <div className="container h-75 d-flex align-items-center justify-content-center">
              <div className="card w-75">
                <div className="card-header bg-success">
                  <div className="row">
                    <div className="col-12">
                      <nav className="navbar navbar-expand-lg navbar-light text-light">
                        <h4 className="text-white">                        
                          Foodcloud
                        </h4>
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarNav"
                          aria-controls="navbarNav"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                          <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                              <a
                                className="nav-link text-light"
                                href="#"
                                
                              >
                                Home
                              </a>
                            </li>
                          
                              <li className="nav-item">
                                <a
                                  className="nav-link text-light"
                                  href="#"
                                 
                                >
                                  About
                                </a>
                              </li>
                           
                          
                              <li className="nav-item">
                                <a
                                  className="nav-link text-light"
                                  href="#"
                                 
                                >
                                  Products
                                </a>
                              </li>
                           
                            <li
                              className="nav-item"
                            >
                              <a
                                className="nav-link text-light"
                                href="#"
                              >
                                <i className="fas fa-user text-light mr-1"></i>
                                Account
                              </a>  
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>




                <div className="card-body">
                <div>
                        <section className="hero bg-white text-dark py-5">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                <div className="feature">
                                    <i className="fas fa-shopping-cart"></i>
                                    <h4>Buy Fresh Produce</h4>
                                    <p>
                                    Explore a wide selection of fresh fruits and groceries from local
                                    suppliers.
                                    </p>
                                </div>
                                <div className="feature">
                                    <i className="fas fa-dollar-sign"></i>
                                    <h4>Sell Your Produce</h4>
                                    <p>
                                    List your farm-fresh products and reach a broader customer base.
                                    </p>
                                </div>
                                <div className="feature">
                                    <i className="fas fa-truck"></i>
                                    <h4>Fast Delivery</h4>
                                    <p>
                                    Enjoy convenient doorstep delivery for all your fresh produce
                                    orders.
                                    </p>
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <img
                                  src={groceriesImage}
                                  alt="Product image"
                                  className="img-fluid"
                                />
                                </div>
                            </div>
                            </div>
                        </section>
                        </div>                 
                </div>

                <div className="card-footer bg-success">
                    <footer className="footer py-4">
                        <div className="container text-center">
                        <span>
                            &copy; 2023 FoodCloud - Your Source for Fresh Fruits and Groceries.
                            All rights reserved.
                        </span>
                        </div>
                    </footer>
                </div>




              </div>
            </div>         
        </>
      );
    };
export default Home;