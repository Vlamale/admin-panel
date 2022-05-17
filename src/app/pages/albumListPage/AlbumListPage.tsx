import React from "react";
import { useQuery } from "@apollo/client";
import {
  ChevronDownIcon,
  DeleteIcon,
  EditIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import {
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
import { useSearchParams } from "react-router-dom";
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
    notifyOnNetworkStatusChange: true,
    variables: {
      options: {
        paginate: {
          page: parseInt(searchParams.get("page") || "0") + 1,
          limit: parseInt(searchParams.get("size") || "10"),
        },
      },
    },
  });

  React.useEffect(() => {
    setIsLoading(loading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "User name",
        accessor: "userName",
      },
      {
        Header: "Number of photos",
        accessor: "totalCount",
      },
      {
        Header: "action",
        Cell: () => {
          return (
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
          );
        },
      },
    ],
    []
  );

  return (
    <Container maxW="container.md">
      <Center flexDirection="column">
        <Heading as="h1" my="12">
          Albom list
        </Heading>

        <TableContainer w="100%" boxShadow="xl">
          <Table
            data={Utils.getAlbumTableData(data || previousData)}
            columns={columns}
            pagination={{
              totalCount:
                data?.albums?.meta?.totalCount ||
                previousData?.albums?.meta?.totalCount ||
                1,
            }}
          />
        </TableContainer>
      </Center>
    </Container>
  );
};

export default AlbumListPage;
