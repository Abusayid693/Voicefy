import { Button } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { Container } from "../../components/Container";
import { InputField, SecureInputField } from "../../components/inputField";
import { ErrorFormat } from "../../util/error";
import ProfileUploader from "../../components/ImageUpload";
import { Heading } from "@chakra-ui/react";

const RegisterUI: React.FC<{
  registerMutation: any;
  router: any;
  formValidation: any;
}> = ({ registerMutation, router, formValidation }) => {
  return (
    <Container varient="small">
      <Heading as="h3" size="xl" isTruncated marginBottom={10} marginTop={20}>
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
          } else if (response.data?.register.user) {
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
export default RegisterUI;
