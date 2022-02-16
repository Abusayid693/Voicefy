import { useSessionCheckQuery } from "../generated/graphql";
import { useRouter } from "next/router";
import Login from "../containers/Login";
import { gql, useMutation, useQuery } from "@apollo/client";

const Index = () => {
  // const { data } = useSessionCheckQuery();
  const GET_DOCS = gql`
    query {
      Me {
        id
        username
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_DOCS, {
    fetchPolicy: "no-cache",
  });
  console.log('Login :',data)
  const router = useRouter();

  // if (data) router.push("/");
  return <Login />;
};

export default Index;
