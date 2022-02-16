import Register from "../containers/register"
import { useSessionCheckQuery } from "../generated/graphql";
import { useRouter } from "next/router";

const Index = () => {
  const { data } = useSessionCheckQuery();
  const router = useRouter();

  if (data) router.push("/");
  return <Register />;
};

export default Index;
