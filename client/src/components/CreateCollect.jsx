import React from 'react';
import { withRouter } from 'react-router-dom';




function CreateCollect(props) {
  return (
    <div className="add-form" >
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
          name="imgurl"
          value={props.collectForm.imgurl}
          onChange={props.handleFormChange} />
        {/* PRICE */}
        <p>Price</p>
        <input
          type="text"
          name="price"
          value={props.collectForm.price}
          onChange={props.handleFormChange} />
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(CreateCollect);