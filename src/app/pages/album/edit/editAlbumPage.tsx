/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form } from "app/components";
import { useAppContext } from "app/hooks";
import {
  Types as CreateAlbumTypes,
  operations as createAlbumOperations,
} from "../create/duck";
import { Consts, operations, Types } from "./duck";

const EditAlbumPage: React.FC = () => {
  const { isLoading, setIsLoading } = useAppContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: usersQuery, loading: usersQueryLoading } = useQuery<
    CreateAlbumTypes.GetUsersQuery,
    CreateAlbumTypes.GetUsersQueryVariables
  >(createAlbumOperations.getUsers);

  const { data: albumQuery, loading: albumQueryLoading } = useQuery<
    Types.GetAlbumInputQuery,
    Types.GetAlbumInputQueryVariables
  >(operations.getAlbumInput, {
    variables: {
      id: id!,
    },
  });

  const [updateAlbum, { loading: updateAlbumLoading }] = useMutation<
    Types.UpdateAlbumMutation,
    Types.UpdateAlbumMutationVariables
  >(operations.updateAlbum);

  React.useEffect(() => {
    const loading =
      usersQueryLoading || updateAlbumLoading || albumQueryLoading;
    setIsLoading(loading);
  }, [usersQueryLoading, updateAlbumLoading, albumQueryLoading]);

  const onSubmit: SubmitHandler<Types.IUpdateAlbomFormFields> = async (
    formData
  ) => {
    try {
      await updateAlbum({
        variables: {
          id: id!,
          input: formData,
        },
      });
      navigate("/albums");
    } catch {}
  };

  const formConfig = React.useMemo(
    () => ({
      defaultValues: {
        title: albumQuery?.album?.title || "pp",
        userId: albumQuery?.album?.user?.id,
      },
    }),
    [albumQuery]
  );

  return (
    <Box pos="absolute" w="100%" h="100vh" left="0" top="0">
      <Center h="full">
        <Box boxShadow="xl" p="10" w="md">
          <Box textAlign="center" mb="7">
            <Heading fontSize="3xl" fontWeight="normal">
              Edit album
            </Heading>
          </Box>

          {albumQuery && (
            <Form
              formConfig={formConfig}
              validationSchema={Consts.updateAlbumFormSchema}
              onSubmit={onSubmit}
            >
              <Form.FormControl name="title" mb="5">
                <FormLabel>Title</FormLabel>
                <Form.Input focus name="title" />
              </Form.FormControl>

              <Form.FormControl name="userId" mb="8">
                <FormLabel>User</FormLabel>
                <Form.Select name="userId" placeholder="Select the user">
                  {usersQuery?.users?.data?.map((user) => (
                    <option key={user?.id} value={user?.id?.toString()}>
                      {user?.name}
                    </option>
                  ))}
                </Form.Select>
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
                  disabled={isLoading}
                  type="submit"
                  colorScheme="teal"
                  variant="solid"
                >
                  Submit
                </Button>
              </HStack>
            </Form>
          )}
        </Box>
      </Center>
    </Box>
  );
};

export default EditAlbumPage;
