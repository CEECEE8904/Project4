import React from 'react';
import { withRouter } from 'react-router-dom'
import { Link, Router } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="app-navbar">
        <ul>
          <li>dummy link</li>
        </ul>
        <Link to="/home"></Link>
      </nav>
    )
  }
}


export default withRouter(Navbar);
