import React from 'react';

import { Flex, Img } from '@chakra-ui/react';

interface Props {
  svg: string;
  w?: string;
  h?: string;
}

export function Images({ svg, w = '32px', h = '32px' }: Props) {
  return (
    <Flex
      w={w}
      h={h}
      align="center"
      justify="center"
      borderRadius="50%"
      _hover={{ background: '#1d9bf019' }}
    >
      <Img src={svg} cursor="pointer" />
    </Flex>
  );
}
