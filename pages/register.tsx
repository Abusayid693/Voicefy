import Register from "../containers/register"
import { useRouter } from "next/router";
import { useAuth } from "../contexts/Auth";

const Index = () => {
  const auth = useAuth();

  console.log('Login :',auth.currentUser)
  const router = useRouter();

  if (auth.isAuthenticated()) router.push("/");
  
  return <Register />;
};

export default Index;
