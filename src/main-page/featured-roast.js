import React from 'react';
import Roast from '../roast';
import '../roast/roast.css';

const FeaturedRoast = (props) => {
  if (props.roast) return (
    <div>
      <div className="row featuredRoast">
        <h3 className="col-md-12 text-center fonty">
          featured roast
        </h3>
      </div>
      <Roast roast={props.roast} />
    </div>
  )
  return (<div>No featured roast at this time</div>)
}

export default FeaturedRoast;