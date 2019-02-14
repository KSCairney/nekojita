import React, { Component } from 'react';

class RoastFilter extends Component {
  state = {}

  onSearchChange = (e) => {
    const roast = e.target.value;
    this.props.filterRoasts(roast);
  }

  render() {
    const search = this.state.search;
    const roasts = this.props.roasts || [];

    return (
      <div className="form-group row mt-3">
        <div className="offset-md-2 col-md-4">
          Look for your favorite roast color:
        </div>
        <div className="col-md-4">
          <select className="form-control" value={search} onChange={this.onSearchChange}>
            {roasts.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
    );
  }
}

export default RoastFilter;