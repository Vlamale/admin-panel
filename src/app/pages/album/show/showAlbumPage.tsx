import * as React from "react";
import { useQuery } from "@apollo/client";
import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  ListItem,
  Tab,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UnorderedList,
} from "@chakra-ui/react";
import { useSearchParams, useParams } from "react-router-dom";
import { AlbumPhoto, Table } from "app/components";
import { useAppContext } from "app/hooks";
import { operations, Types } from "./duck";

const ShowAlbumPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { setIsLoading } = useAppContext();
  const { id } = useParams();
  const { data, loading, previousData } = useQuery<
    Types.GetAlbumQuery,
    Types.GetAlbumQueryVariables
  >(operations.getAlbum, {
    variables: {
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      id: id!,
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
  }, [loading, setIsLoading]);

  const tableData =
    data?.album?.photos?.data || previousData?.album?.photos?.data || [];

  const totalCount =
    data?.album?.photos?.meta?.totalCount ||
    previousData?.album?.photos?.meta?.totalCount ||
    0;

  return (
    <Container maxW="container.md">
      <Box d="flex" alignItems="center" justifyContent="space-between" w="100%">
        <Heading as="h1" my="12" ml={[2, 12, 24]}>
          Album: {data?.album?.title}
        </Heading>
      </Box>

      <Tabs isFitted variant="enclosed" boxShadow="xl">
        <TabList>
          <Tab>Basic</Tab>
          <Tab>Photos</Tab>
        </TabList>
        <TabPanels borderRightWidth="1px" borderLeftWidth="1px">
          <TabPanel>
            <UnorderedList styleType="none" spacing="6" p="6">
              <ListItem>
                <b>ID:</b> {data?.album?.id}
              </ListItem>
              <ListItem>
                <b>User:</b> Name {data?.album?.user?.name}
              </ListItem>
              <ListItem>
                <b>Email:</b> Name {data?.album?.user?.email}
              </ListItem>
            </UnorderedList>
          </TabPanel>
          <TabPanel>
            <TableContainer w="100%">
              <Table
                data={tableData}
                pagination={{
                  totalCount,
                }}
              >
                <Table.Column name="ID" path="id" />
                <Table.Column name="Title" path="title" />
                <Table.Column name="Preview">
                  <AlbumPhoto />
                </Table.Column>
                <Table.Column name="Actions">
                  <>
                    <Button
                      colorScheme="teal"
                      variant="outline"
                      justifyContent="space-between"
                    >
                      <ViewIcon />
                    </Button>
                  </>
                </Table.Column>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default ShowAlbumPage;