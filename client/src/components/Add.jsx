import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  createCollect,
} from './services/api-helper';

class Add extends Component {
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


  render() {
    return (
      <div className="add-form">
        <h1>Add to collection</h1>
        <form onSubmit={props.newCollect}>
          {/* SNEAKER NAME */}
          <p>Sneaker Name:</p>
          <input
            type="text"
            name="name"
            value={props.collectForm.name}
            onChange={props.handleFormChange} />
          {/* SNEAKER BRAND */}
          <p>Brand:</p>
          <input
            type="text"
            name="brand"
            value={props.collectForm.brand}
            onChange={props.handleFormChange} />
          {/* DESCRIPTION */}
          <p>Description:</p>
          <input
            type="text"
            name="description"
            value={props.collectForm.description}
            onChange={props.handleFormChange} />
          {/* REVIEW */}
          <p>Review</p>
          <input
            type="text"
            name="review"
            value={props.collectForm.review}
            onChange={props.handleFormChange} />
          {/* IMG URL */}
          <p>Image URL</p>
          <input
            type="text"
            name="image url"
            value={props.collectForm.imgurl}
            onChange={props.handleFormChange} />
          {/* PRICE */}
          <p>Price</p>
          <input
            type="text"
            name="description"
            value={props.collectForm.price}
            onChange={props.handleFormChange} />
        </form>
      </div>
    );
  }
}
export default withRouter(Add);