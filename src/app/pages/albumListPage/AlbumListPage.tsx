import React from "react";
import { useQuery } from "@apollo/client";
import {
  ChevronDownIcon,
  DeleteIcon,
  EditIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  TableContainer,
} from "@chakra-ui/react";
import { useSearchParams, Link } from "react-router-dom";
import { Table } from "app/components";
import { useAppContext } from "app/hooks";
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
  }, [loading, setIsLoading]);

  return (
    <Container maxW="container.md">
      <Center flexDirection="column">
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
        >
          <Heading as="h1" my="12" ml="24">
            Albom list
          </Heading>

          <Button
            as={Link}
            to="/albums/create"
            colorScheme="teal"
            variant="solid"
          >
            Create album
          </Button>
        </Box>

        <TableContainer w="100%" boxShadow="xl">
          <Table
            data={Utils.getAlbumTableData(data)}
            pagination={{
              totalCount,
            }}
          >
            <Table.Column name="ID" path="id" />
            <Table.Column name="Title" path="title" />
            <Table.Column name="User name" path="userName" />
            <Table.Column name="Number of photos" path="totalCount" />
            <Table.Column>
              <Menu>
                <MenuButton as={Button} colorScheme="teal" variant="outline">
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList minW="28">
                  <MenuItem justifyContent="space-between">
                    Show <ViewIcon />
                  </MenuItem>
                  <MenuItem justifyContent="space-between">
                    Edit <EditIcon />
                  </MenuItem>
                  <MenuItem justifyContent="space-between">
                    Delete <DeleteIcon />
                  </MenuItem>
                </MenuList>
              </Menu>
            </Table.Column>
          </Table>
        </TableContainer>
      </Center>
    </Container>
  );
};

export default AlbumListPage;
