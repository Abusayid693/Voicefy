import DashboardSideBar from 'components/DashboardSideBar';
import {usePostsQuery} from 'generated/graphql';
import {useRouter} from 'next/router';
import useAuth from '../../hooks/useAuth';

const Index = () => {
  const auth = useAuth();
  const router = useRouter();

  const {data} = usePostsQuery({
    variables: {
      limit: 10
    }
  });

  console.log('data : ', data);

  // useEffect(() => {
  //   if (!auth.isAuthenticated() && !auth.loading) router.push('/');
  // }, [auth.isAuthenticated(), auth.loading]);

  return (
    <>
      {auth.isAuthenticated() ? (
        <DashboardSideBar activeIndex={1}>
          {data?.posts?.map((item: any) => JSON.stringify(item))}
        </DashboardSideBar>
      ) : (
        <h1>Please first login</h1>
      )}
    </>
  );
};

export default Index;
