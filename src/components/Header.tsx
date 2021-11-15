import { Flex } from "@chakra-ui/react";

import { Nav } from './Nav/Nav';

export function Header() {
  

  return (
    <Flex
      flexGrow={1}
      as="header"
      flexShrink={1}
      justify="flex-end"
      zIndex="3"
    >
      <Flex w="275px" h="0">
        <Flex h="100vh" flexDir="column" position="fixed">
          <Flex px="12px" w="275" h="100%">

            <Nav />

          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}


