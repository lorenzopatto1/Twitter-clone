import {
  Flex,
  Input,
  Box,
  Text,
  HStack,
  CircularProgress,
  CircularProgressLabel,
  useColorModeValue,
} from '@chakra-ui/react';

import { useState } from 'react';

import { useToast } from "@chakra-ui/react"

import { useUserInfos } from '../Contexts/UserInfosContext';

import Image from '../../images/Image.svg';
import Gif from '../../images/Gif.svg';
import Stats from '../../images/Stats.svg';
import Smiley from '../../images/Smiley.svg';

import { Images } from '../Images';
import { Tweets } from './Tweets';

export function TweetZone() {
  const [inputText, setInputText] = useState('');
  const [texts, setTexts] = useState(['']);
  const { userInfos } = useUserInfos();

  const toast = useToast();

  function TweetPublisher() { 
      if (isActive && !userInfos) {
        toast({
          title: "Falha na publicação",
          description: 'Insira Suas informações para tweetar',
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      } else if (isActive && userInfos) {
        setTexts([...texts, inputText]);
        setInputText('');
      }
      
  }

  const fontColor = useColorModeValue('#000', '#fff');
  const bg = useColorModeValue('#eff3f4', '#2f3336');
  const trackColor = useColorModeValue('gray.200', 'gray.800');

  const inputTextLength = inputText?.length;

  const isActive = inputTextLength >= 1 && inputTextLength <= 280;

  return (
    <>
      <Flex minH="120px">
        <Flex flexDir="column" minH="100%" w="100%" p="8px 16px">
          <Flex flexDir="row" >
            <Flex paddingBottom="4px">
              <Box w="48px" h="48px" bg="gray" borderRadius="9999px"></Box>
              <Input
                resize="none"
                placeholder="O que está acontecendo?"
                value={inputText}
                fontWeight="400"
                fontSize="20px"
                _placeholder={{ color: '#6E767D' }}
                w="502px"
                minH="52px"
                border="none"
                _focus={{ border: 'none' }}
                onChange={(e) => setInputText(e.target.value)}
              />
            </Flex>
          </Flex>
          <Flex justify="space-between" h="100%" align="flex-end">
            <HStack pl="56px" spacing="16px">
              <Images svg={Image} />
              <Images svg={Gif} />
              <Images svg={Stats} />
              <Images svg={Smiley} />
            </HStack>
            <Flex align="center" justify="center">
              {inputTextLength >= 1 && (
                <CircularProgress
                  mr="4"
                  max={280}
                  trackColor={trackColor}
                  value={inputTextLength}
                  color={
                    inputTextLength >= 280
                      ? 'red.600'
                      : '#0078d4' && inputTextLength >= 260
                      ? 'yellow.400'
                      : '#0078d4'
                  }
                  size={inputTextLength >= 260 ? '32px' : '28px'}
                  thickness={inputTextLength >= 260 ? '6px' : '4px'}
                >
                  {inputTextLength >= 260 && (
                    <CircularProgressLabel
                      color={
                        inputTextLength >= 280 ? 'red.600' : fontColor
                      }
                      fontSize="12px"
                    >
                      {280 - inputTextLength}
                    </CircularProgressLabel>
                  )}
                </CircularProgress>
              )}
              <Flex
                w="90px"
                h="36px"
                align="center"
                justify="center"
                bg="rgba(29, 155, 240)"
                borderRadius="9999px"
                onClick={TweetPublisher}
                cursor={isActive ? 'pointer' : 'default'}
                opacity={isActive ? '1' : '0.5'}
              >
                <Text fontWeight="600" fontSize="15" color="#fff">
                  Tweetar
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex my="4px" h="1px" bg={bg} />
      <Tweets tweetsText={texts}/>
    </>
  );
}
