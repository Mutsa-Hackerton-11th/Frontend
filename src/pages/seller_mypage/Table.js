import React from "react";
import { useTable } from "react-table";
import styled from "styled-components";
import theme from "../../styles/theme";

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

const TableSheet = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
`;

const Header = styled.th`
  padding: 2rem;
  border: 1px solid #ddd;

  ${(props) => props.theme.fontStyles.text}

  background-color:${(props) => props.theme.colors.buttonColor.gray}
`;

const Cell = styled.td`
  padding: 1rem;
  border: 1px solid #ddd;
  ${(props) => props.theme.fontStyles.subText}
`;

export default Table;
