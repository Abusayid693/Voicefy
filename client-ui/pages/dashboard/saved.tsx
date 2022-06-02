import DashboardSideBar from 'components/DashboardSideBar';
import usePosts from 'hooks/usePosts';
import Container from '../../containers/Saved';
import useAuth from '../../hooks/useAuth';

const Index = () => {
  const auth = useAuth();
  const {posts, loading} = usePosts();

  return (
    <>
      {auth.isAuthenticated() ? (
        <DashboardSideBar activeIndex={1}>
          {loading ? <>loading....</> : <Container data={posts} />}
        </DashboardSideBar>
      ) : (
        <h1>Please first login</h1>
      )}
    </>
  );
};

export default Index;
