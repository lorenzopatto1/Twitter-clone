import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "Open Sans",
    body: "Open Sans",
  },
  styles: {
    global: {
      '&::-webkit-scrollbar': {
        width: '7px',
        bg: 'gray.900',
        borderTopRightRadius: '8px',
        borderBottomRightRadius: '8px',
      },
      overflowX: "hidden",
      '&::-webkit-scrollbar-thumb': {
        bg: 'gray.300',
        borderRadius: '5px',
      },
    },
  },
});

export default theme;
