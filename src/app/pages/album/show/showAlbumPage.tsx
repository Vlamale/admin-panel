/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useQuery } from "@apollo/client";
import {
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
import { Table } from "app/components";
import { useAppContext } from "app/hooks";
import { Photo, ShowPhotoButton } from "./components";
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
  }, [loading]);

  const tableData =
    data?.album?.photos?.data || previousData?.album?.photos?.data || [];

  const totalCount =
    data?.album?.photos?.meta?.totalCount ||
    previousData?.album?.photos?.meta?.totalCount ||
    0;

  return (
    <Container maxW="container.md">
      <Heading as="h1" my="12" textAlign="center">
        Album: {data?.album?.title}
      </Heading>

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
            </UnorderedList>
          </TabPanel>

          <TabPanel>
            <TableContainer w="100%">
              <Table data={tableData} totalCount={totalCount}>
                <Table.Column name="ID" path="id" />
                <Table.Column name="Title" path="title" />
                <Table.Column name="Preview">
                  <Photo />
                </Table.Column>
                <Table.Column name="Actions">
                  <ShowPhotoButton />
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
