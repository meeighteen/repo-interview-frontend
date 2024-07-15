import React, { useEffect, useState } from 'react';
import './Table.css';

const TableComponent = ({columns, data, filter, handleFilterChange, dataFiltered}) => {

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
           {dataFiltered.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.key}>
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <div className="filter-container">
        <select id="filter" value={filter} onChange={handleFilterChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default TableComponent;
