import * as React from "react";
import { useMutation } from "@apollo/client";
import {
  ChevronDownIcon,
  DeleteIcon,
  EditIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAppContext } from "app/hooks";
import { operations, Types } from "./duck";

const AlbumDropdownButton: React.FC = ({ data }: any) => {
  const { setIsLoading } = useAppContext();
  const [deleteAlbum, { loading }] = useMutation<
    Types.DeleteAlbumMutation,
    Types.DeleteAlbumMutationVariables
  >(operations.deleteAlbum);

  React.useEffect(() => {
    setIsLoading(loading);
  }, [loading, setIsLoading]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteAlbumHandler = async () => {
    try {
      await deleteAlbum();
      onClose();
    } catch {}
  };

  return (
    <>
      <Menu>
        <MenuButton as={Button} colorScheme="teal" variant="outline">
          <ChevronDownIcon />
        </MenuButton>
        <MenuList minW="28">
          <MenuItem
            as={Link}
            to={`./${data.id}`}
            justifyContent="space-between"
          >
            Show <ViewIcon />
          </MenuItem>
          <MenuItem
            as={Link}
            to={`./${data.id}/edit`}
            justifyContent="space-between"
          >
            Edit <EditIcon />
          </MenuItem>
          <MenuItem onClick={onOpen} justifyContent="space-between">
            Delete <DeleteIcon />
          </MenuItem>
        </MenuList>
      </Menu>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure?</ModalBody>

          <ModalFooter>
            <Button
              to="/albums"
              colorScheme="teal"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancle
            </Button>
            <Button
              disabled={loading}
              type="submit"
              colorScheme="teal"
              variant="solid"
              onClick={deleteAlbumHandler}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AlbumDropdownButton;
