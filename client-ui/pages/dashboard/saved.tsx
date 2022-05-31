import DashboardSideBar from 'components/DashboardSideBar';
import Container from '../../containers/Saved';
import useAuth from '../../hooks/useAuth';
import usePosts from 'hooks/usePosts';

const Index = () => {
  const auth = useAuth();
  const {posts, loading} = usePosts();

  return (
    <>
      {auth.isAuthenticated() ? (
        <DashboardSideBar activeIndex={1}>
          {loading ? <>loading....</> : <Container data={posts} />}
          {posts?.map((item: any) => JSON.stringify(item))}
        </DashboardSideBar>
      ) : (
        <h1>Please first login</h1>
      )}
    </>
  );
};

export default Index;
