import React from 'react';
import { withRouter } from 'react-router';

function CollectView(props) {
  return (
    <div className="collect-container">
      {props.collects.map(collect => (
        <div
          key={collect.id}
          className="collect-card"
          onClick{(e) => {
            props.history.push(`collects/${collects.id}`);
            windows.scrollTo(0, 0);
          }}>

          )
    
    
    
    
    </div>
      )
}