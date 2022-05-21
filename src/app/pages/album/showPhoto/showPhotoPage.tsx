/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as React from "react";
import { useQuery } from "@apollo/client";
import { Center, Container, Heading, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useAppContext } from "app/hooks";
import { operations, Types } from "./duck";

const ShowPhotoPage: React.FC = () => {
  const { id } = useParams();
  const { setIsLoading } = useAppContext();

  const { data, loading } = useQuery<
    Types.GetPhotoQuery,
    Types.GetPhotoQueryVariables
  >(operations.getPhoto, {
    variables: {
      id: id!,
    },
  });

  React.useEffect(() => {
    setIsLoading(loading);
  }, [loading, setIsLoading]);

  return (
    <Container maxW="container.md">
      <Heading as="h1" my="12" textAlign="center">
        Photo: {data?.photo?.title}
      </Heading>
      <Center>
        <Image src={data?.photo?.url || ""} alt="album photo" w="450px" />
      </Center>
    </Container>
  );
};

export default ShowPhotoPage;
