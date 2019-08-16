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
      <div className="collects-view">
        {
          this.state.collects.map(collect => (
            <div key={collect.id}>
              <div class="row">
                <div class="column1">
                  <h3><img src={collect.imgurl} /></h3>
                </div>
                <div class="column2">
                  <ul>
                    <ul>{collect.name}</ul>
                    <ul>{collect.brand}</ul>
                    <ul>{collect.description}</ul>
                    <ul>{collect.review}</ul>
                  </ul>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}
export default withRouter(Collect);


