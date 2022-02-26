import NavigationWrapper from "../components/Navbar/Authenticated";
import { useSessionCheckQuery } from "../generated/graphql";
import Editor from "../containers/Editor"

const Index = () => {
  //   const { data, error, loading } = useSessionCheckQuery();
  //   console.log(data);
  //   if (!loading && !data) {
  //     return (
  //       <div>
  //         <div>you got query failed for some reason</div>
  //         <div>{error?.message}</div>
  //       </div>
  //     );
  //   }
  return (
    <NavigationWrapper>
      <h1>{JSON.stringify({ data: 4 })}</h1>
      <Editor/>
    </NavigationWrapper>
  );
};

export default Index;
