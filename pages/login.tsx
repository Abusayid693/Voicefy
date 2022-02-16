import { useSessionCheckQuery } from "../generated/graphql";
import { useRouter } from "next/router";
import Login from "../containers/Login";

const Index = () => {
  const { data } = useSessionCheckQuery();
  const router = useRouter();

  if (data) router.push("/");
  return <Login />;
};

export default Index;
