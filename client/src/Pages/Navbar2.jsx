import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  const navbarStyle = {
    position: 'sticky',
    top: '0',
    zIndex: '100',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
  };
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary sticky-navbar" >
        <div className="container">
          <Link className="navbar-brand" to="/" style={{ color: "white" }}>
            Books Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  style={{ color: "white" }}
                  href="#section1" 
                >
                  HOME
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  style={{ color: "white" }}
                  href="#section2" 
                >
                  Get started
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  style={{ color: "white" }}
                  href="#section3" 
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ borderBottom: '2px solid white' }}></div>
    </div>
  );
};

export default Navbar2;
