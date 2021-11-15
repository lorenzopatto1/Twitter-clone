import React from 'react';

import { Flex, useColorModeValue } from '@chakra-ui/react';

import { MainHeader } from './MainHeader';
import { TweetZone } from './TweetZone';

export function Feed() {
  const border = useColorModeValue('#eff3f4', '#2f3336');

  return (
    <Flex
      maxW="600"
      w="100%"
      zIndex="1"
      borderLeftWidth="1px"
      borderRightWidth="1px"
      borderColor={border}
      flexDir="column"
      position="relative"
    >
      <MainHeader />
      <TweetZone />

    </Flex>
  );
}
