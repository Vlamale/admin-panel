import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        background: "teal.500",
        color: "white",
      },
      defaultProps: {
        variant: "base",
      },
    },
  },
});

export default theme;
