import DashboardSideBar from 'components/DashboardSideBar';
import useAuth from '../../hooks/useAuth';
import CreateVoice from 'components/CreateVoice';
import {HStack, Button} from '@chakra-ui/react';
import usePosts from 'hooks/usePosts';
import {PostsSmall} from '../../containers/Saved';

const Index = () => {
  const auth = useAuth();
  const {posts5, loading, updatePosts} = usePosts();
  console.log('loading :', loading);
  return (
    <>
      {auth.isAuthenticated() ? (
        <DashboardSideBar activeIndex={0}>
          <HStack mb={10}>
            <CreateVoice />
            <CreateVoice />
            <Button onClick={updatePosts}>Fetch posts</Button>
          </HStack>
          {loading ? <>loading....</> : <PostsSmall data={posts5} />}
        </DashboardSideBar>
      ) : (
        <h1>Please first login</h1>
      )}
    </>
  );
};

export default Index;
