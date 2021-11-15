import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';

import UserProvider from '../Contexts/UserInfosContext';

import { Feed } from './Feed';
import { Infos } from './UserInfo/Infos';

export function Main() {
  const bg = useColorModeValue('#fff', '#000');

  return (
    <UserProvider>
    <Flex as="main" background={bg} minH="100%" flexGrow={1} flexDir="column">
    <Flex
      maxW="990"
      minH="100%"
      flexShrink={1}
      flexGrow={1}
    >
      <Flex align="stretch" justify="space-between" w="100%" minH="100%">
        <Feed />
        <Infos />
      </Flex>
    </Flex>
  </Flex>
  </UserProvider>
  );
}

