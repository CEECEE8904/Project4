import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

class Collect extends React.Component {
  constructor() {
    super();
    this.state = {
      collects: []
    }
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:3000/sneakers/1/collects')
    const collects = res.data
    this.setState({
      collects: collects
    })
  }

  render() {
    console.log(this.state.collects);
    return (
      <div className="CollectsView">
        {
          this.state.collects.map(collect => (
            <div key={collect.id}>
              <ul>
                <ul>{collect.name}</ul>
                <ul>{collect.brand}</ul>
                <ul>{collect.description}</ul>
                <ul>{collect.review}</ul>
              </ul>

              <h3><img src={collect.imgurl} /></h3>
            </div>
          ))
        }
      </div>
    );
  }
}
export default withRouter(Collect);


