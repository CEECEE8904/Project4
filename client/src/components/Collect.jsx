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
                  <ul>{collect.brand}</ul>
                  <ul>{collect.description}</ul>
                  <ul>{collect.review}</ul>
                </ul>
              </div>
            </div>
            <button onClick={() => { props.deleteCollect(collect.id) }}>delete</button>
            <button onClick={() => { props.setFormData(collect) }}>Update</button>
          </div>
        ))
      }
    </div>
  )
}

export default withRouter(Collect)



