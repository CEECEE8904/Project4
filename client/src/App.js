import React from 'react';
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Navbar from './components/Navbar';
import axios from 'axios';
import { Route, withRouter } from 'react-router-dom';
import Collect from './components/Collect';
import CreateCollect from './components/CreateCollect';
import EditCollect from './components/EditCollect';

import {
  loginUser,
  registerUser,
  readAllSneakers,
  verifyUser,
  createCollect,
  updateCollect,
  destroyCollect,
  readAllCollects
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
    const res = await axios.get('http://localhost:3000/sneakers/1/collects')
    const collects = res.data
    this.setState({
      collects: collects
    })
  }

  getSneakers = async () => {
    const sneakers = await readAllSneakers();
    this.setState({
      sneakers
    })
  }


  /////ADD NEW SNEAKER TO COLLECTION
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

  //////EDIT SNEAKER IN COLLECTION
  editCollect = async (e) => {
    e.preventDefault()
    const { collectForm } = this.state
    await updateCollect(collectForm.id, collectForm);
    this.setState(prevState => (
      {
        collects: prevState.collects.map(collect => collect.id === collectForm.id ? collectForm : collect),
        collectForm: {
          name: "",
          brand: "",
          description: "",
          review: "",
          imgurl: "",
          price: ""
        }
      }
    ))
    this.props.history.push('/collect')
  }

  setFormData = (collect) => {
    this.setState({
      collectForm: collect
    })
    this.props.history.push('/edit')
  }

  //////DELETE FROM COLLECTION
  deleteCollect = async (id) => {
    await destroyCollect(id);
    debugger;
    this.setState(prevState => ({
      collects: prevState.collects.filter(collect => collect.id !== id)
    }))
  }


  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      collectForm: {
        ...prevState.collectForm,
        [name]: value
      }
    }))
  }


  handleFormChange2 = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  mountEditForm = async (id) => {
    const collects = await readAllCollects();
    const collect = collects.find(el => el.id === parseInt(id));
    this.setState({
      collectForm: collect
    });
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
    return (
      <div className="App">
        <header>
          {
            this.state.currentUser
              ?
              <Navbar
                handleLogout={this.handleLogout}
              />
              :
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
        </header>
        <main>
          <div className="homenav">
            <main>
              <Route exact path="/home"
                render={() => (
                  <Home
                    sneakers={this.state.sneakers}

                  />)} />
              <Route path="/collect" render={() => (
                <Collect
                  deleteCollect={this.deleteCollect}
                  collects={this.state.collects}
                  setFormData={this.setFormData}
                />
              )} />

              <Route path="/add" render={() => <CreateCollect
                collectForm={this.state.collectForm}
                handleFormChange={this.handleFormChange}
                newCollect={this.newCollect}
              />} />

              <Route path="/edit" render={() => (
                <EditCollect
                  collectForm={this.state.collectForm}
                  handleFormChange={this.handleFormChange}
                  editCollect={this.editCollect}
                />
              )} />
              {/* <Route path="/home" render={() => <Home />} /> */}
            </main>
          </div>
        </main>
      </div>
    );
  }
}




export default withRouter(App);
