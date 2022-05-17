import {Box, Button, Heading} from '@chakra-ui/react';
import {Form, Formik} from 'formik';
import {InputField, SecureInputField} from '../../components/inputField';
import useAuth from '../../hooks/useAuth';
import {ErrorFormat} from '../../util/utils';

const LoginUI: React.FC<{
  loginMutation: any;
  router: any;
  formValidation: any;
}> = ({loginMutation, router, formValidation}) => {
  const auth = useAuth();

  const {login} = auth;

  return (
    <Box
      width={'100vw'}
      mt={0}
      height="100vh"
      mx={'auto'}
      bg="black.primary"
      padding={'0 35%'}
    >
      <Heading
        as="h3"
        size="xl"
        isTruncated
        marginBottom={10}
        marginTop={0}
        color="white.100"
      >
        Login
      </Heading>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={async (values, {setErrors}) => {
          const response = await loginMutation({
            variables: {
              username: values.username,
              password: values.password
            }
          });
          console.log(response);
          if (response.data?.login.errors) {
            setErrors(ErrorFormat(response.data?.login.errors));
          } else if (response.data?.login.user) {
            login({
              user: response.data?.login.user,
              token: response.data?.login.token
            });
            router.push('/');
          }
        }}
      >
        {props => (
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
              variant="primary"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default LoginUI;
