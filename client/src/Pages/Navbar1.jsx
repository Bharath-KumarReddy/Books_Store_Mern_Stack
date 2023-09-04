import React from 'react';
import {Link} from 'react-router-dom'
const Navbar1 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container"> 
          <Link className="navbar-brand" to="/" style={{color:"white"}}>Books Store</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <Link className="nav-item active nav-link" style={{color:"white"}} to="/userpage">
                HOME
              </Link>
              <Link className="nav-item active nav-link" style={{color:"white"}} to="/searchbook">
                Search Book
              </Link>
              <Link className="nav-item active nav-link" style={{color:"white"}} to="/requestbook">
                Request
              </Link>
              <Link className="nav-item active nav-link" style={{color:"white"}} to="/">
                Logout
              </Link>
              <a href="mailto:kalagotlabharathkumarreddy@gmail.com" style={{color:"white"}}>
                <button className='btn btn-primary'>Contact</button>
              </a>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ borderBottom: '2px solid white' }}></div>
    </div>
  );
};

export default Navbar1;
