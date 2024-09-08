

import React, { useState } from 'react';

const Table = ({ columns = ['Header 1', 'Header 2', 'Header 3'], rows = [['Data 1', 'Data 2', 'Data 3']], updateProps, isPublished }) => {
  const [tableData, setTableData] = useState({ columns, rows });

  const handleColumnChange = (index, value) => {
    const newColumns = [...tableData.columns];
    newColumns[index] = value;
    setTableData({ ...tableData, columns: newColumns });
    updateProps({ columns: newColumns, rows: tableData.rows });
  };

  const handleRowChange = (rowIndex, colIndex, value) => {
    const newRows = [...tableData.rows];
    newRows[rowIndex][colIndex] = value;
    setTableData({ ...tableData, rows: newRows });
    updateProps({ columns: tableData.columns, rows: newRows });
  };

  // If published, render only the static table with headers and data
  if (isPublished) {
    return (
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            {tableData.columns.map((col, colIndex) => (
              <th key={colIndex} className="border px-4 py-2">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border px-4 py-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            {tableData.columns.map((col, colIndex) => (
              <th key={colIndex} className="border px-4 py-2">
                <input
                  type="text"
                  value={col}
                  onChange={(e) => handleColumnChange(colIndex, e.target.value)}
                  className="border p-2 rounded w-full"
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border px-4 py-2">
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleRowChange(rowIndex, colIndex, e.target.value)}
                    className="border p-2 rounded w-full"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
