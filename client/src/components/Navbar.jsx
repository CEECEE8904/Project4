import React from 'react';
import { withRouter } from 'react-router-dom'
import { Link, Route } from 'react-router-dom';
import Collect from './Collect';
import Add from './Add';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }


  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
    this.props.history.push('/login')
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <nav>
        <ul className="nav_links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/collect">My Collection</Link></li>
          <li><Link to="/add">Add</Link></li>
        </ul>
        <button onClick={this.handleLogout}>Logout</button>
        <main>
          <Route path="/collect" render={() => <Collect />} />
          <Route path="/add" render={() => <Add />} />
          {/* <Route path="/home" render={() => <Home />} /> */}
        </main>
      </nav>
    )
  }
}


export default withRouter(Navbar);
