import { Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { Container } from "../../components/Container";
import { InputField, SecureInputField } from "../../components/inputField";
import { ErrorFormat } from "../../util/error";
import { Heading } from "@chakra-ui/react";
import { useAuth } from "../../contexts/Auth";

const LoginUI: React.FC<{
  loginMutation: any;
  router: any;
  formValidation: any;
}> = ({ loginMutation, router, formValidation }) => {
  const auth = useAuth();

  const { login } = auth;

  return (
    <Container varient="small">
      <Heading as="h3" size="xl" isTruncated marginBottom={10} marginTop={20}>
        Login
      </Heading>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await loginMutation({
            variables: {
              username: values.username,
              password: values.password,
            },
          });
          console.log(response);
          if (response.data?.login.errors) {
            setErrors(ErrorFormat(response.data?.login.errors));
          } else if (response.data?.login.user) {
            login({
              user: response.data?.login.user,
              token: response.data?.login.token,
            });
            router.push("/");
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
              alignSelf={"left"}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default LoginUI;
