import { useRegisterMutation } from "../../generated/graphql";
import { useRouter } from "next/router";
import RegisterUI from "./indexUI";

const Register: React.FC = ({}) => {
  const [registerMutation] = useRegisterMutation();

  const router = useRouter();

  const formValidation = (value: string): string => {
    let error = "";
    if (!value) {
      error = "This field is required";
    } else if (value.toLowerCase().includes("$")) {
      error = "special characters are not allowed";
    }
    return error;
  };

  return (
    <RegisterUI
      formValidation={formValidation}
      router={router}
      registerMutation={registerMutation}
    />
  );
};
export default Register;
