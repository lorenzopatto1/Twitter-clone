import { useUserInfos } from '../Contexts/UserInfosContext';

import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

import { Images } from '../Images';

import Message from '../../images/Message.svg';
import Retweet from '../../images/Retweet.svg';
import Like from '../../images/Like.svg';
import Upload from '../../images/Upload.svg';

type TweetProps = {
  tweetsText?: string[];
};

export function Tweets({ tweetsText }: TweetProps) {
  const color = useColorModeValue('#000', '#fff');
  const border = useColorModeValue('#eff3f4', '#2f3336');

  const { userInfos } = useUserInfos();

  return (
    <Flex flexDir="column" w="100%" h="100%">
      {tweetsText?.map((text) =>
          text !== '' && userInfos && (
              <Flex w="100%" borderBottomWidth="1px" borderColor={border}>
                <Flex as="article" w="100%" px="4" pt="3">
                  <Flex h="100%" mr="3">
                    <Box
                      w="48px"
                      h="48px"
                      bg="gray"
                      borderRadius="9999px"
                    ></Box>
                  </Flex>
                  <Flex pb="3" w="100%" flexDir="column">
                    <Flex>
                      <Flex
                        justify="space-between"
                        w="100%"
                        fontSize="15"
                        color="#6e767d"
                      >
                        <Flex>
                          <Text as="strong" color={color}>
                            {userInfos?.name}
                          </Text>
                          <Text ml="1">{userInfos?.verifiedAs}</Text>
                          <Text mx="1">·</Text>
                          <Text>1h</Text>
                        </Flex>
                        <Flex>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.207 8.14701C19.817 7.75701 19.184 7.75701 18.793 8.14701L12 14.94L5.20699 8.14701C4.81699 7.75701 4.18399 7.75701 3.79299 8.14701C3.40299 8.53701 3.40299 9.17001 3.79299 9.56101L11.293 17.061C11.488 17.257 11.743 17.355 12 17.355C12.257 17.355 12.512 17.257 12.707 17.062L20.207 9.56201C20.597 9.17201 20.597 8.54001 20.207 8.14901V8.14701Z"
                              fill="gray"
                            />
                          </svg>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex>
                      <Text fontSize="14" wordBreak="break-word">
                        {text}
                      </Text>
                    </Flex>
                    <Flex h="32px">
                      <Flex
                        maxW="425px"
                        mt="3"
                        w="100%"
                        justify="space-between"
                      >
                        <Images svg={Message} />
                        <Images svg={Retweet} />
                        <Images svg={Like} />
                        <Images svg={Upload} />
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            )
        )
      }
    </Flex>
  );
}
