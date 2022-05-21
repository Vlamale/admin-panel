import * as React from "react";
import {
  ChevronDownIcon,
  DeleteIcon,
  EditIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AlbumDropdownButton: React.FC = ({ data }: any) => (
  <Menu>
    <MenuButton as={Button} colorScheme="teal" variant="outline">
      <ChevronDownIcon />
    </MenuButton>
    <MenuList minW="28">
      <MenuItem as={Link} to={`./${data.id}`} justifyContent="space-between">
        Show <ViewIcon />
      </MenuItem>
      <MenuItem
        as={Link}
        to={`./${data.id}/edit`}
        justifyContent="space-between"
      >
        Edit <EditIcon />
      </MenuItem>
      <MenuItem justifyContent="space-between">
        Delete <DeleteIcon />
      </MenuItem>
    </MenuList>
  </Menu>
);

export default AlbumDropdownButton;
