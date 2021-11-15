import { useState } from 'react';

import { Flex, Input, useColorModeValue, IconButton } from '@chakra-ui/react';
import { UserInfoForm } from './UserInfoForm';
import { useUserInfos } from '../../Contexts/UserInfosContext';

import { RiArrowGoBackFill } from 'react-icons/ri';

export function Infos() {
  const [inputSelected, setInputSelected] = useState(false);

  const { userInfos, setUserInfos } = useUserInfos();

  const search = useColorModeValue('#536471', '#6e767d');
  const absoluteBg = useColorModeValue('#fff', '#000');
  const bg = useColorModeValue('#eff3f4', '#202327');

  return (
    <Flex pt="3" minW="350px" h="100%" flexDir="column">
      <Flex position="relative">
        <Flex
          w="350px"
          minH="32px"
          h="53px"
          mb="3"
          top="0"
          zIndex="2"
          align="center"
          borderWidth="1px"
          borderColor={absoluteBg}
          position="fixed"
          bg={absoluteBg}
        >
          <Flex
            bg={inputSelected ? absoluteBg : bg}
            borderWidth="1px"
            justify="center"
            align="center"
            borderColor={inputSelected ? '#0078d4' : absoluteBg}
            borderRadius="9999px"
            flexGrow={1}
            minW="350px"
            h="44px"
          >
            <Flex w="44px" h="42px" align="center" justify="flex-end">
              <svg
                width="32"
                height="18.75"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.53 20.47L17.87 16.81C19.195 15.24 20 13.214 20 11C20 6.03 15.97 2 11 2C6.03 2 2 6.03 2 11C2 15.97 6.03 20 11 20C13.215 20 15.24 19.196 16.808 17.87L20.468 21.53C20.615 21.676 20.808 21.75 20.998 21.75C21.188 21.75 21.383 21.677 21.528 21.53C21.823 21.237 21.823 20.763 21.53 20.47ZM3.5 11C3.5 6.865 6.865 3.5 11 3.5C15.135 3.5 18.5 6.865 18.5 11C18.5 15.135 15.135 18.5 11 18.5C6.865 18.5 3.5 15.135 3.5 11Z"
                  fill={inputSelected ? '#0078d4' : search}
                />
              </svg>
            </Flex>
            <Flex flexGrow={1} justify="center" align="center">
              <Input
                p="3"
                border="none"
                fontSize="inherit"
                _placeholder={{ color: '#6E767D' }}
                _focus={{ border: 'none' }}
                onFocus={() => setInputSelected(true)}
                onBlur={() => setInputSelected(false)}
                placeholder="Buscar no Twitter"
              />
            </Flex>
          </Flex>
          {userInfos && (
            <IconButton
              aria-label="trocar dados"
              icon={<RiArrowGoBackFill />}
              onClick={() => userInfos && setUserInfos(undefined)}
            >
              Trocar Dados
            </IconButton>
          )}
        </Flex>
      </Flex>
      <Flex h="53px" />

      {!userInfos && <UserInfoForm />}
    </Flex>
  );
}
