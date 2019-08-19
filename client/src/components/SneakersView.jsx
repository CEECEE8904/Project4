import React from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';

class SneakersView extends React.Component {
  constructor() {
    super();
    this.state = {
      sneakers: []
    }
  }


  async componentDidMount() {
    const res = await axios.get('http://localhost:3000/sneakers')
    const sneakers = res.data
    this.setState({
      sneakers: sneakers
    })
  }


  render() {
    console.log(this.state.sneakers);
    return (
      <div className="sneakers-view">

        {
          this.state.sneakers.map(sneaker => (
            <div key={sneaker.id}>
              <div class="row">
                <div class="column1">
                  <h3><img src={sneaker.imgurl} /></h3>
                </div>
                <div class="column2">
                  <ul>
                    <h4>{sneaker.name}</h4>
                    <ul>{sneaker.brand}</ul>
                    <ul>{sneaker.description}</ul>
                    <ul>{sneaker.review}</ul>
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
export default withRouter(SneakersView);