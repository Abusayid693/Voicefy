import { Button } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { useMutation } from "urql";
import { Container } from "../components/Container";
import { InputField } from "../components/inputField";
interface indexProps {}

const GET_USER = `
mutation Register($username:String!, $password:String!){
    register(options:{
      password:$password,
      username:$username
    }){
      errors{
        field
        message
      }
      user{
        username
      }
    }
  }`;

const Index: React.FC<indexProps> = ({}) => {
  const [, register] = useMutation(GET_USER);

  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() == "") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  return (
    <Container varient="small">
      <Formik
        initialValues={{ username: "Sasuke", password: "" }}
        onSubmit={(values, actions) => {
          //   setTimeout(() => {
          //     alert(JSON.stringify(values, null, 2));
          //     actions.setSubmitting(false);
          //   }, 1000);
           return register({ username: values.username, password: values.password });
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
