import { useUserInfos } from '../../Contexts/UserInfosContext';

import { Flex, useColorModeValue, Text, Stack, Button } from '@chakra-ui/react';

import { Input } from '../../Input/Input';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useToast } from "@chakra-ui/react"

type UserInfoFormData = {
  name: string;
  as: string;
};

const sendUserInfoFormSchema = yup.object().shape({
  name: yup.string().required('Coloca um nome favor'),
  as: yup.string().required('Bota um @ ai vai'),
});

export function UserInfoForm() {
  const { setUserInfos } = useUserInfos();

  const toast = useToast();

  const { register, handleSubmit, formState } = useForm<UserInfoFormData>({
    resolver: yupResolver(sendUserInfoFormSchema),
  });

  const { errors } = formState;

  const handleSendInfos: SubmitHandler<UserInfoFormData> = async ({
    name,
    as,
  }) => {

    const verifiedAs = as.indexOf("@") > -1 ? as: '@'+as;  

    setUserInfos({name, verifiedAs});

    toast({
      title: "Informações Salvas",
      description: 'Suas informações foram salvas, faça suas publicações à vontade',
      status: "success",
      duration: 3000,
      isClosable: true,
    })
    
  };

  const bg = useColorModeValue('#eff3f4', '#202327');
  const scheme = useColorModeValue('gray.500', '#191b1f');
  const color = useColorModeValue('gray:800', 'gray:200');

  return (
    <Flex justify="center" w="100%" bg={bg} borderRadius="10">
        <Flex
          as="form"
          flexDir="column"
          onSubmit={handleSubmit(handleSendInfos)}
        >
          <Stack spacing="4" p="4">
            <Text fontWeight="bold">
              Adicione suas informações para tweetar
            </Text>
            <Input
              type="text"
              label="Nome"
              autoComplete="none"
              errorBorderColor="red.400"
              error={errors.name}
              {...register('name')}
            />
            <Input
              type="text"
              label="@"
              errorBorderColor="red.400"
              error={errors.as}
              {...register('as')}
            />
            <Button type="submit" mt="6" bg={scheme} color={color} size="lg">
              Inserir Informações
            </Button>
          </Stack>
        </Flex>
    </Flex>
  );
}
