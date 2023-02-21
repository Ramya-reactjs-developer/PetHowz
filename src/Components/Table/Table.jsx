import React from "react";
import "./Table.css";
export const Table = () => {
  const TableData = [
    {
      area: "1200 Sq.ft",
      size: "3 Bedrooms",
      type: "Villa",
      prefer: "Small Pets",

      capacity: "8-10 pets",
      petsAccepted: "Cats & Dogs",
      location: "Anna Nagar, Chennai",
      canProvide: "Oral Medication",
    },
  ];

  return (
    <div>
      <table className="TableComponent">
        <thead>
          <tr>
            <th>Area</th>
            <th>Size</th>
            <th>Type</th>
            <th>Prefer</th>
            <th>Capacity</th>
            <th>Pets Accepted</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {TableData?.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item?.area}</td>
                <td>{item?.size}</td>
                <td>{item?.type}</td>
                <td>{item?.prefer}</td>
                <td>{item?.capacity}</td>
                <td>{item?.petsAccepted}</td>
                <td>{item?.location}</td>
              </tr>
            );
          })}
        </tbody>
        <thead>
          <tr>
            <th>Can Provide</th>
          </tr>
        </thead>
        <tbody>
          {TableData?.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item?.canProvide}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
