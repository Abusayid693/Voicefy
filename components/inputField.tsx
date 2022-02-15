import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { useField } from "formik";

interface containerProps {
  name: string;
  label: string;
  placeholder?:string;
  validate?;
  type?;
  
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
