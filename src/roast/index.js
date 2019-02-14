import React, { Component } from 'react';
import "./roast.css";

class roast extends Component {
  state = {}
  render() {
    const roast = this.props.roast;
    return (
      <div>
        <div className="row mt-2">
          <h5 className="col-md-12 fonty">{roast.roast}</h5>
        </div>
        <div className="row">
          <h3 className="col-md-12 fonty">{roast.name}</h3>
        </div>
        <div className="row">
          <div className="col-md-7 beans">
            <img src={roast.photo} />
          </div>
          <div className="col-md-5">
            <p className="price">${roast.price}</p>
            <p>{roast.description}</p>
          </div>
        </div>
      </div>
      
    )
  }
}

export default roast;