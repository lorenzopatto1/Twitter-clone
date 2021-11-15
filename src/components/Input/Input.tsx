import { Input as ChakraInput, FormControl, FormLabel, InputProps as ChakraInputProps, FormErrorMessage, useColorModeValue } from "@chakra-ui/react";
import { FieldError } from 'react-hook-form';
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps>
  = ({name, label, error = null, ...rest}, ref) => {
    const bg = useColorModeValue('gray.400', 'gray.800')

    return (
      <FormControl isInvalid={!!error}>
        { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

        <ChakraInput
          name={name}
          id={name}
          focusBorderColor="yellow.600"
          bgColor={bg}
          variant="filled"
          _hover={{
            bgColor: bg
          }}
          size="lg"
          ref={ref}
          {...rest}
        />
        
        { !!error && (
          <FormErrorMessage>
            {error.message}
          </FormErrorMessage>
        )}
   
      </FormControl>
    )
  }

  export const Input = forwardRef(InputBase);