import * as React from "react";
import { Image } from "@chakra-ui/react";

const AlbumPhoto: React.FC = ({ data }: any) => {
  return <Image src={data.thumbnailUrl} w="70px" h="auto" />;
};

export default AlbumPhoto;
