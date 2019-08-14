import React from 'react';
import { withRouter } from 'react-router-dom';
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
    }
  };

  newCollect = async (e) => {
    e.preventDefault();
    const collect = await createCollect(this.state.collectForm);
    this.setState(prevState => ({
      teachers: [...prevState.collects, collect],
      teacherForm: {
        name: "",
        brand: "",
        description: "",
        review: "",
        imgurl: "",
        price: "",
      }
    }))
  }


  render() {
    return (
      <div className="add-form">
        <h1>Add to collection</h1>
        <form onSubmit={this.props.newCollect}>
          {/* SNEAKER NAME */}
          <p>Sneaker Name:</p>
          <input
            type="text"
            name="name"
            value={this.props.collectForm.name}
            onChange={this.props.handleFormChange} />
          {/* SNEAKER BRAND */}
          <p>Brand:</p>
          <input
            type="text"
            name="brand"
            value={this.props.collectForm.brand}
            onChange={this.props.handleFormChange} />
          {/* DESCRIPTION */}
          <p>Description:</p>
          <input
            type="text"
            name="description"
            value={this.props.collectForm.description}
            onChange={this.props.handleFormChange} />
          {/* REVIEW */}
          <p>Review</p>
          <input
            type="text"
            name="review"
            value={this.props.collectForm.review}
            onChange={this.props.handleFormChange} />
          {/* IMG URL */}
          <p>Image URL</p>
          <input
            type="text"
            name="image url"
            value={this.props.collectForm.imgurl}
            onChange={this.props.handleFormChange} />
          {/* PRICE */}
          <p>Price</p>
          <input
            type="text"
            name="description"
            value={this.props.collectForm.price}
            onChange={this.props.handleFormChange} />
        </form>
      </div>
    );
  }
}
export default withRouter(Add);