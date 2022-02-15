import { useState } from "react"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputRightElement,
  Input,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import { useField } from "formik";

interface containerProps {
  name: string;
  label: string;
  placeholder?: string;
  validate?: any;
  type?: any;

}

export const InputField: React.FC<containerProps> = (props) => {
  const [field, { error }] = useField(props);
  return (

    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      <Input {...field} type={props.type} id={props.name} placeholder={props.placeholder} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export const SecureInputField: React.FC<containerProps> = (props) => {
  const [field, { error }] = useField(props);
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
      <InputGroup size='md'>
        <Input
          {...field}
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          id={props.name}
          placeholder={props.placeholder}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  )
}