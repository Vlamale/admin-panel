/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  TableContainer,
} from "@chakra-ui/react";
import { useSearchParams, Link } from "react-router-dom";
import { Table } from "app/components";
import { useAppContext } from "app/hooks";
import { DropdownButton } from "./components";
import { operations, Types, Utils } from "./duck";

const AlbumListPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const { setIsLoading } = useAppContext();
  const { data, loading, previousData } = useQuery<
    Types.GetAlbomsQuery,
    Types.GetAlbomsQueryVariables
  >(operations.getAlboms, {
    variables: {
      options: {
        paginate: {
          page: parseInt(searchParams.get("page") || "0") + 1,
          limit: parseInt(searchParams.get("size") || "10"),
        },
      },
    },
  });

  const totalCount =
    data?.albums?.meta?.totalCount ||
    previousData?.albums?.meta?.totalCount ||
    0;

  React.useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return (
    <Container maxW="container.md">
      <Center flexDirection="column">
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
        >
          <Heading as="h1" my="12" ml={[2, 12, 24]}>
            Albom list
          </Heading>

          <Button as={Link} to="./create" colorScheme="teal" variant="solid">
            Create album
          </Button>
        </Box>

        <TableContainer w="100%" boxShadow="xl">
          <Table
            totalCount={totalCount}
            data={Utils.getAlbumsTableData(data || previousData)}
          >
            <Table.Column name="ID" path="id" />
            <Table.Column name="Title" path="title" />
            <Table.Column name="User name" path="userName" />
            <Table.Column name="Number of photos" path="totalCount" />
            <Table.Column>
              <DropdownButton />
            </Table.Column>
          </Table>
        </TableContainer>
      </Center>
    </Container>
  );
};

export default AlbumListPage;
