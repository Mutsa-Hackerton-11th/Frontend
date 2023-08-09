import React from "react";
import { useTable } from "react-table";
import styled from "styled-components";

const TableSheet = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
`;

const Header = styled.th`
  padding: 8px;
  border: 1px solid #ddd;
`;

const Cell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <TableSheet {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Header {...column.getHeaderProps()}>
                {column.render("Header")}
              </Header>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <Cell {...cell.getCellProps()}>{cell.render("Cell")}</Cell>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </TableSheet>
  );
}

export default Table;
