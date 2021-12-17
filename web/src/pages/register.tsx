import { Button } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useRegisterMutation } from "../generated/graphql";
import { Container } from "../components/Container";
import { InputField } from "../components/inputField";

const Index: React.FC = ({}) => {
  const [registerMutation] = useRegisterMutation();
  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase().includes("$")) {
      error = "special characters are not allowed in name";
    }
    return error;
  }

  return (
    <Container varient="small">
      <Formik
        initialValues={{ username: "Sasuke", password: "" }}
        onSubmit={async (values, actions) => {
          const valuest = await registerMutation({
            variables: {
              username: values.username,
              password: values.password,
            },
          });
          console.log(valuest);
        }}
      >
        {(props) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="username"
              validate={validateName}
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
