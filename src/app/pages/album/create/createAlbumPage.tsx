/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Center,
  FormLabel,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "app/components";
import { useAppContext } from "app/hooks";
import { Consts, operations, Types, Utils } from "./duck";

const CreateAlbumPage: React.FC = () => {
  const { isLoading, setIsLoading } = useAppContext();
  const navigate = useNavigate();

  const { data: usersQuery, loading: usersQueryLoading } = useQuery<
    Types.GetUsersQuery,
    Types.GetUsersQueryVariables
  >(operations.getUsers);

  const [createAlbum, { loading: albumMutationLoading }] = useMutation<
    Types.CreateAlbumMutation,
    Types.CreateAlbumMutationVariables
  >(operations.createAlbum);

  React.useEffect(() => {
    const loading = usersQueryLoading || albumMutationLoading;
    setIsLoading(loading);
  }, [usersQueryLoading, albumMutationLoading]);

  const onSubmit: SubmitHandler<Types.ICreateAlbomFormFields> = async (
    formData
  ) => {
    try {
      await createAlbum({
        variables: {
          input: formData,
        },
      });
      navigate("/albums");
    } catch {}
  };

  return (
    <Box pos="absolute" w="100%" h="100vh" left="0" top="0">
      <Center h="full">
        <Box boxShadow="xl" p="10" w="md">
          <Box textAlign="center" mb="7">
            <Heading fontSize="3xl" fontWeight="normal">
              Create album
            </Heading>
          </Box>
          <Form
            validationSchema={Consts.createAlbumFormSchema}
            onSubmit={onSubmit}
          >
            <Form.FormControl name="title" mb="5">
              <FormLabel>Title</FormLabel>
              <Form.Input focus name="title" />
            </Form.FormControl>

            <Form.FormControl name="userId" mb="8">
              <FormLabel>User</FormLabel>
              <Form.Select
                name="userId"
                placeholder="Select the user"
                options={Utils.getSelectOptions(usersQuery)}
              />
            </Form.FormControl>

            <HStack>
              <Button
                as={Link}
                to="/albums"
                colorScheme="teal"
                variant="outline"
              >
                Cancle
              </Button>
              <Button
                type="submit"
                colorScheme="teal"
                variant="solid"
                disabled={isLoading}
              >
                Submit
              </Button>
            </HStack>
          </Form>
        </Box>
      </Center>
    </Box>
  );
};

export default CreateAlbumPage;
