import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import {
  Center,
  Container,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useAppContext } from "app/hooks";
import { operations, Types } from "./duck";

const AlbumListPage: React.FC = () => {
  const { setIsLoading } = useAppContext();
  const { data, loading } = useQuery<
    Types.GetAlbomsQuery,
    Types.GetAlbomsQueryVariables
  >(operations.getAlboms, {
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: 10,
        },
      },
    },
  });

  useEffect(() => {
    setIsLoading(loading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <Container maxW="container.md">
      <Center flexDirection="column">
        <Heading as="h1" my="12">
          Albom list
        </Heading>

        <TableContainer maxW="100%" boxShadow="xl">
          <Table variant="simple" size="md" maxW="100%" whiteSpace="normal">
            <Thead bg="teal.500">
              <Tr>
                <Th isNumeric color="white">
                  ID
                </Th>
                <Th color="white">Title</Th>
                <Th color="white">User name</Th>
                <Th isNumeric color="white">
                  Number of photos
                </Th>
                <Th color="white">action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.albums?.data?.map((albom) => (
                <Tr key={albom?.id}>
                  <Td isNumeric>{albom?.id}</Td>
                  <Td>{albom?.title}</Td>
                  <Td>{albom?.user?.name}</Td>
                  <Td isNumeric>7</Td>
                  <Td>action</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Center>
    </Container>
  );
};

export default AlbumListPage;
