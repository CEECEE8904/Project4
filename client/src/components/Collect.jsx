import React from 'react';
import { withRouter } from 'react-router';

function Collect(props) {
  return (
    <div className="collects-view">
      {
        props.collects.map(collect => (
          <div key={collect.id}>
            <div className="row">
              <div className="column1">
                <h3><img src={collect.imgurl} /></h3>
              </div>
              <div className="column2">
                <ul>
                  <h4>{collect.name}</h4>
                  &nbsp;
                  <ul>Brand:       {collect.brand}</ul>
                  <ul>Description:{collect.description}</ul>
                  <ul>Review: {collect.review}</ul>
                  <ul>Price: ${collect.price}</ul>
                </ul>
              </div>
            </div>
            <button onClick={() => { props.setFormData(collect) }}>EDIT</button>
            <button onClick={() => { props.deleteCollect(collect.id) }}>DELETE</button>
          </div>
        ))
      }
    </div>
  )
}

export default withRouter(Collect)



