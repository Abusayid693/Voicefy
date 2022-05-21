import DashboardSideBar from 'components/DashboardSideBar';
import {usePostsQuery} from 'generated/graphql';
import {useRouter} from 'next/router';
import Container from '../../containers/Saved';
import useAuth from '../../hooks/useAuth';

const Index = () => {
  const auth = useAuth();
  const router = useRouter();

  const {data, loading} = usePostsQuery({
    variables: {
      limit: 10
    }
  });

  return (
    <>
      {auth.isAuthenticated() ? (
        <DashboardSideBar activeIndex={1}>
          {loading ? <>loading....</> : <Container data={data?.posts} />}
          {data?.posts?.map((item: any) => JSON.stringify(item))}
        </DashboardSideBar>
      ) : (
        <h1>Please first login</h1>
      )}
    </>
  );
};

export default Index;
