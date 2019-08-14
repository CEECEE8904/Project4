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
      <div className="SneakersView">
        {
          this.state.sneakers.map(sneaker => (
            <div key={sneaker.id}>
              <ul>
                <ul>{sneaker.name}</ul>
                <ul>{sneaker.brand}</ul>
                <ul>{sneaker.description}</ul>
                <ul>{sneaker.review}</ul>
              </ul>

              <h3><img src={sneaker.imgurl} /></h3>
            </div>
          ))
        }
      </div>
    );
  }
}
export default withRouter(SneakersView);