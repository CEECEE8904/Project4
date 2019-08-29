import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Navbar(props) {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="logo_nav">
            {/* <a href="/home"><img src={require('./images/logo_final.png')} style={( width:145, marginTop: -7)} /></a> */}
          </div>
          <a href="/home" className="logo">SNKR HEDZ</a>
          <ul className="nav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/collect">My Collection</Link></li>
            <li><Link to="/add">Add</Link></li>
          </ul>
          <button onClick={props.handleLogout}>Logout</button>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Navbar);