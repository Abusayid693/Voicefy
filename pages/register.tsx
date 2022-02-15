import { Button } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useRegisterMutation } from "../generated/graphql";
import { Container } from "../components/Container";
import { InputField } from "../components/inputField";
import { ErrorFormat } from "../util/error";

const Index: React.FC = ({}) => {
  const [registerMutation] = useRegisterMutation();

  // function validateName(value: string): string {
  //   let error = "";
  //   if (!value) {
  //     error = "Name is required";
  //   } else if (value.toLowerCase().includes("$")) {
  //     error = "special characters are not allowed in name";
  //   }
  //   return error;
  // }

  return (
    <Container varient="small">
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
        }}
      >
        {(props) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="username"
              // validate={validateName}
            />

            <InputField
              name="password"
              placeholder="password"
              label="password"
              type="password"
            />
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
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
