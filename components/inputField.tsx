import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { useField } from "formik";
import { useState } from "react";

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
      <FormLabel color={"white.100"} htmlFor={props.name}>
        {props.label}
      </FormLabel>
      <Input
        borderColor={"white.100"}
        {...field}
        type={props.type}
        id={props.name}
        placeholder={props.placeholder}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export const SecureInputField: React.FC<containerProps> = (props) => {
  const [field, { error }] = useField(props);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel color={"white.100"} htmlFor={props.name}>
        {props.label}
      </FormLabel>
      <InputGroup size="md">
        <Input
          {...field}
          pr="4.5rem"
          type={show ? "text" : "password"}
          id={props.name}
          placeholder={props.placeholder}
          borderColor={"white.100"}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick} variant="primary">
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
