import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Results = (props) => {
  console.log(props);
  let results = props.results.data.items;
  const resultsList = results.map((r, idx) => {
    return (
      <div key={idx} className="col">
        <div  className="card">
        <Link
              to={`/record/${r.id.videoId}`}
              params={{ video: r.id.videoId }}
            >
          <img
            className="cardImg"
            src={r.snippet.thumbnails.medium.url}
            alt={r.snippet.title}
          />
          <div className="card-body">
            <h5 className="card-title">{r.snippet.title}</h5>
            
          </div>
          </Link>
        </div>
        <hr />
      </div>
    );
  });

  return (
    <div>
      <h1 className="searchResultsText">Search Results</h1>
      <div className="container">
        <div className="row">{resultsList}</div>;
      </div>
    </div>
  );
};

export default Results;
