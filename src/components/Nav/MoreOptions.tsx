import {
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuOptionGroup,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { RiSunFill, RiMoonLine } from 'react-icons/ri';

export function MoreOptions() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('#fff', '#000');
  const color = useColorModeValue('#0f1419', '#d9d9d9');
  const userInteraction = useColorModeValue('#0f141919', '#d9d9d919');


  return (
    <Menu closeOnSelect={true} placement="top">
      <MenuButton
        as={Button}
        align="center"
        p="4"
        maxW="100%"
        h="50.25px"
        borderRadius="9999px"
        cursor="pointer"
        transitionDuration="0.2s"
        background="none"
        _hover={{ background: userInteraction }}
        _focus={{ background: "none" }}
      >
        <Flex>
          <Flex w="26.25px" h="26.25px">
            <svg
              width="26.25"
              height="26.25"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 10.25C15.535 10.25 14.75 11.037 14.75 12C14.75 12.963 15.534 13.75 16.5 13.75C17.464 13.75 18.25 12.964 18.25 12C18.25 11.036 17.464 10.25 16.5 10.25ZM16.5 12.75C16.086 12.75 15.75 12.414 15.75 12C15.75 11.587 16.087 11.25 16.5 11.25C16.913 11.25 17.25 11.586 17.25 12C17.25 12.413 16.914 12.75 16.5 12.75ZM12 10.25C11.034 10.25 10.25 11.037 10.25 12C10.25 12.963 11.035 13.75 12 13.75C12.965 13.75 13.75 12.964 13.75 12C13.75 11.036 12.966 10.25 12 10.25ZM12 12.75C11.586 12.75 11.25 12.414 11.25 12C11.25 11.587 11.587 11.25 12 11.25C12.413 11.25 12.75 11.586 12.75 12C12.75 12.413 12.414 12.75 12 12.75ZM7.5 10.25C6.535 10.25 5.75 11.037 5.75 12C5.75 12.963 6.535 13.75 7.5 13.75C8.464 13.75 9.25 12.964 9.25 12C9.25 11.036 8.463 10.25 7.5 10.25ZM7.5 12.75C7.086 12.75 6.75 12.414 6.75 12C6.75 11.587 7.087 11.25 7.5 11.25C7.913 11.25 8.25 11.586 8.25 12C8.25 12.413 7.914 12.75 7.5 12.75Z"
                fill={color}
              />
              <path
                d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12C1.25 6.072 6.072 1.25 12 1.25C17.928 1.25 22.75 6.072 22.75 12C22.75 17.928 17.928 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                fill={color}
              />
            </svg>
          </Flex>
          <Flex ml="5" mr="4">
            <Text
              as="span"
              fontSize="24"
              fontWeight="normal"
              color={color}
            >
              Mais
            </Text>
          </Flex>
        </Flex>
      </MenuButton>
      <MenuList background={bg} boxShadow={`0 0 2px  ${color}`}>
        <MenuOptionGroup title="Switch Theme">
          <MenuItem
            onClick={toggleColorMode}
            borderTop="1px solid"
            borderColor={color}
          >
            <Flex paddingTop="2" align="center">
              <Icon
                aria-label="Switch Mode"
                as={colorMode === 'light' ? RiMoonLine : RiSunFill}
                fontSize="30"
              />
              <Text fontWeight="600" fontSize="15" ml="4">
                Trocar Para o tema
                {colorMode === 'light' ? ' Escuro' : ' Claro'}
              </Text>
            </Flex>
          </MenuItem>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}
