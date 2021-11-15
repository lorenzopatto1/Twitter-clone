import '@fontsource/open-sans/400.css';
import {
  Flex,
  useColorModeValue,
  Text,
  Link,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

interface SectionProps {
  sectionName?: string;
  href?: string;
  children?: ReactElement<SVGAElement>;
  img?: string;
}

export function Section({ sectionName, href, children, img }: SectionProps) {
  const color = useColorModeValue('#0f1419', '#d9d9d9');
  const bgListColor = useColorModeValue('#0f141919', '#d9d9d919');

  const isTextSidebar = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (isTextSidebar) {
    return (
      <Link
        exact
        to={href}
        _hover={{ textDecor: 'none' }}
        w="100%"
        maxH="100%"
        href={href}
        flexDir="column"
        _focus={{ background: 'none' }}
      >
        <Flex
          align="center"
          p="4"
          maxW="100%"
          h="50.25px"
          borderRadius="9999px"
          cursor="pointer"
          transitionDuration="0.2s"
          _hover={{ background: bgListColor }}
        >
          <Flex w="26.25px" h="26.25px">
            {children ? (
              children
            ) : '' || img ? (
              <img src={img} alt=""></img>
            ) : (
              ''
            )}
          </Flex>
          <Flex ml="5" mr="4">
            <Text as="span" fontSize="24" color={color}>
              {sectionName}
            </Text>
          </Flex>
        </Flex>
      </Link>
    );
  }

  return (
    <Flex w="26.25px" h="26.25px" my="3">
      {children ? children : '' || img ? <img src={img} alt=""></img> : ''}
    </Flex>
  );
}
