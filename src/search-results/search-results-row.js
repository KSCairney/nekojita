import React from 'react';

const SearchResultsRow = (props) => {
  const setActive = (e) => {
    e.preventDefault();
    props.setActiveRoast(props.roast);
  };

  return <tr onClick={setActive}>
    <td>{props.roast.name}</td>
    <td>{props.roast.price}</td>
    <td>{props.roast.likes}</td>
  </tr>
};

export default SearchResultsRow;