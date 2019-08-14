import React from 'react';
import { withRouter } from 'react-router-dom';

export default function Add(props) {
  return (
    <div className="add-form">
      <h1>Add to collection</h1>
      <form onSubmit={props.newCollect}>

      </form>
    </div>
  )

};
