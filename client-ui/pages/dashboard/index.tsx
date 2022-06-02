import {HStack} from '@chakra-ui/react';
import CreateVoice from 'components/CreateVoice';
import DashboardSideBar from 'components/DashboardSideBar';
import usePosts from 'hooks/usePosts';
import {PostsSmall} from '../../containers/Saved';
import useAuth from '../../hooks/useAuth';

const Index = () => {
  const auth = useAuth();
  const {posts5, loading} = usePosts();

  return (
    <>
      {auth.isAuthenticated() ? (
        <DashboardSideBar activeIndex={0}>
          <HStack mb={10}>
            <CreateVoice />
            <CreateVoice />
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
