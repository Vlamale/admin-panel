import * as React from "react";
import { Image } from "@chakra-ui/react";

const AlbumPhoto: React.FC = ({ data }: any) => (
  <Image src={data?.thumbnailUrl} alt="album list photo" w="70px" h="auto" />
);

export default AlbumPhoto;
