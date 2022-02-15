import { Button } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useRegisterMutation } from "../generated/graphql";
import { Container } from "../components/Container";
import { InputField, SecureInputField } from "../components/inputField";
import { ErrorFormat } from "../util/error";
import { useRouter } from "next/router";
import ProfileUploader from "../components/ImageUpload"
import { Heading } from '@chakra-ui/react'

const Index: React.FC = ({ }) => {
  const [registerMutation] = useRegisterMutation();

  const router = useRouter()

  const formValidation = (value: string): string => {
    let error = "";
    if (!value) {
      error = "This field is required";
    } else if (value.toLowerCase().includes("$")) {
      error = "special characters are not allowed";
    }
    return error;
  }

  return (
    <Container varient="small">
      <Heading as='h3' size='xl' isTruncated marginBottom={10} marginTop={20}>
        Register
      </Heading>
      <ProfileUploader />
      <Formik
        initialValues={{ username: "Sasuke", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await registerMutation({
            variables: {
              username: values.username,
              password: values.password,
            },
          });
          console.log(response);
          if (response.data?.register.errors) {
            setErrors(ErrorFormat(response.data?.register.errors));
          }
          else if (response.data?.register.user) {
            router.push("/")
          }
        }}
      >
        {(props) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="username"
              validate={formValidation}
            />

            <SecureInputField
              name="password"
              placeholder="password"
              label="password"
              type="password"
              validate={formValidation}
            />
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
              alignSelf={'left'}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default Index;
