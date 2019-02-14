import React, { Component } from 'react';
import SearchResultsRow from './search-results-row';

const SearchResults = (props) => {
  const roastRows = props.filteredRoasts.map(h => 
    <SearchResultsRow key={h.id.toString()} roast={h}
      setActiveRoast={props.setActiveRoast} />);
  return (
    <div className="mt-2" >
      <h4>Results for {props.roast}:</h4>
      <table className="table table-hover">
        <tbody>
          {roastRows}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;