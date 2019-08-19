import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Navbar from './components/Navbar';


import {
  loginUser,
  registerUser,
  readAllSneakers,
  verifyUser,
  createCollect

} from './services/api-helper'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collects: [],
      collectForm: {
        name: "",
        brand: "",
        description: "",
        review: "",
        imgurl: "",
        price: ""
      },
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      }
    };
  }


  //-------------- Display Sneakers -------------------
  async componentDidMount() {
    this.getSneakers();
    const user = await verifyUser();
    if (user) {
      this.setState({
        currentUser: user
      })
    }
  }

  getSneakers = async () => {
    const sneakers = await readAllSneakers();
    this.setState({
      sneakers
    })
  }

  newCollect = async (e) => {
    e.preventDefault();
    const collect = await createCollect(this.state.collectForm);
    this.setState(prevState => ({
      collects: [...prevState.collects, collect],
      collectForm: {
        name: "",
        brand: "",
        description: "",
        review: "",
        imgurl: "",
        price: ""
      }
    }))
    this.props.history.push('/collect');
  }


  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }


  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: userData
    })
    this.props.history.push('/home')
  }

  handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
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
    let display
    if (!this.state.currentUser) {
      display =
        <>
          <Route exact path="/login" render={() => (
            <Login
              handleLogin={this.handleLogin}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData} />)} />
          <Route exact path="/register" render={() => (
            <Register
              handleRegister={this.handleRegister}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData} />)} />
          <div className="toggle-btn">
            {this.state.currentUser
              ?
              <>
                <p>{this.state.currentUser.username}</p>
                <button onClick={this.handleLogout}>Logout</button>
              </>
              :
              <button onClick={this.handleLoginButton}>Login/Register</button>}

          </div>
        </>
    }
    else {
      display =
        <>
          <Navbar />
        </>
    }
    return (
      <div className="App">
        <header>
          {display}
        </header>
        <main>
          <div className="homenav">
            <Route exact path="/home"
              render={() => (
                <Home
                  sneakers={this.state.sneakers}
                />)} />
          </div>
        </main>
      </div>
    );
  }
}




export default withRouter(App);
