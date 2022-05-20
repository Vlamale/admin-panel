import * as React from "react";
import {
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { TableProvider } from "app/context";
import { Column, Pagination } from "./components";
import { Types } from "./duck";

const Table: React.FC<Types.ITableProps> & Types.INamespaceComponents = ({
  children,
  data,
  pagination,
}) => {
  return (
    <TableProvider data={data} pagination={pagination}>
      <ChakraTable variant="simple" size="md" maxW="100%" whiteSpace="normal">
        <Thead bg="teal.500">
          <Tr>
            {React.Children.map(children, (ch) => {
              if (!React.isValidElement(ch)) {
                return null;
              }

              return (
                <Th color="white" h="14">
                  {ch.props.name}
                </Th>
              );
            })}
          </Tr>
        </Thead>

        <Tbody>
          {data.map((row) => (
            <Tr key={row.id}>
              {React.Children.map(children, (ch) => {
                if (!React.isValidElement(ch)) {
                  return null;
                }

                if (ch.props.children) {
                  return (
                    <Td>
                      {React.cloneElement(ch.props.children, {
                        data: row,
                      })}
                    </Td>
                  );
                }

                return <Td>{row[ch.props.path]}</Td>;
              })}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>

      {pagination && <Pagination />}
    </TableProvider>
  );
};

Table.Column = Column;

export default Table;
