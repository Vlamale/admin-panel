import * as React from "react";
import {
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useTable, usePagination } from "react-table";
import { Pagination } from "./components";
import { Types } from "./duck";

const Table = <Data extends Record<string, unknown>>({
  columns,
  data,
  pagination,
}: React.PropsWithChildren<Types.ITableProps<Data>>): JSX.Element => {
  const [searchParams] = useSearchParams();

  const pageIndex = parseInt(searchParams.get("page") ?? "0");
  const pageSize = parseInt(searchParams.get("size") ?? "10");

  const paginationConfig = pagination
    ? {
        initialState: {
          pageIndex,
          pageSize,
        },
        pageCount: Math.ceil(pagination.totalCount / pageSize),
        manualPagination: true,
      }
    : {};

  const tableInstance = useTable<Data>(
    {
      columns,
      data,
      ...paginationConfig,
    },
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    tableInstance;

  return (
    <>
      <ChakraTable
        variant="simple"
        size="md"
        maxW="100%"
        whiteSpace="normal"
        {...getTableProps()}
      >
        <Thead bg="teal.500">
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th color="white" {...column.getHeaderProps()}>
                  {column.render("Header")}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Td
                      isNumeric={typeof cell.value === "number"}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </ChakraTable>

      {pagination && (
        <Pagination
          tableInstance={tableInstance}
          totalCount={pagination.totalCount}
        />
      )}
    </>
  );
};

export default Table;
