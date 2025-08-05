import React from "react";

export default function Component({ data }) {
  return (
    <div className="Component">
      {data !== undefined ? (
        <>
          <h2>
            <span className="Heading">City : </span> {data.name} <span> <span className="Heading"><br></br>Country :</span> {data.sys.country}</span>
          </h2>
          <h2><span className="Heading">Temperature : </span> {data.main.temp}</h2>
          <p><span className="Heading">Description : </span> {data.weather[0].description}</p>
        </>
      ) : (
        <h2>No Data Is Found</h2>
      )}
    </div>
  );
}
