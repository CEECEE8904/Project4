import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {
  createCollect,
} from '../services/api-helper';

class Add extends React.Component {
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
        price: "",
      }
    };
  }


  newCollect = async (e) => {
    e.preventDefault();
    const collect = await createCollect(this.state.collectForm);
    this.setState(prevState => ({
      collects: [...prevState.collects, collect.data],
      collectForm: {
        name: "",
        brand: "",
        description: "",
        review: "",
        imgurl: "",
        price: "",
      }
    }))
  }

  handleFormChange = (ev) => {
    const name = ev.target.name
    const value = ev.target.value
    this.setState(prevState => ({
      collectForm: {
        ...prevState.collectForm,
        [name]: value,
      }
    }))
  }

  submit = (ev) => {
    ev.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({
      name: "",
      brand: "",
      description: "",
      review: "",
      imgurl: "",
      price: "",
    })
    this.props.history.push('/collect')
  }


  render() {
    return (
      <div className="add-form" >
        <h1>Add to collection</h1>
        <form onSubmit={this.props.newCollect}>
          {/* SNEAKER NAME */}
          <p>Sneaker Name:</p>
          <input
            type="text"
            name="name"
            value={this.state.collectForm.name}
            onChange={this.handleFormChange} />
          {/* SNEAKER BRAND */}
          <p>Brand:</p>
          <input
            type="text"
            name="brand"
            value={this.state.collectForm.brand}
            onChange={this.handleFormChange} />
          {/* DESCRIPTION */}
          <p>Description:</p>
          <input
            type="text"
            name="description"
            value={this.state.collectForm.description}
            onChange={this.handleFormChange} />
          {/* REVIEW */}
          <p>Review</p>
          <input
            type="text"
            name="review"
            value={this.state.collectForm.review}
            onChange={this.handleFormChange} />
          {/* IMG URL */}
          <p>Image URL</p>
          <input
            type="text"
            name="imgurl"
            value={this.state.collectForm.imgurl}
            onChange={this.handleFormChange} />
          {/* PRICE */}
          <p>Price</p>
          <input
            type="text"
            name="price"
            value={this.state.collectForm.price}
            onChange={this.handleFormChange} />
          <br></br>
          <button>Submit</button>
        </form>

      </div>
    );
  }
}
export default withRouter(Add);