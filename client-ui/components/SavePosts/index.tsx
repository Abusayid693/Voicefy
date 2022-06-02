import {AddIcon} from '@chakra-ui/icons';
import {Button, useToast} from '@chakra-ui/react';
import {useCreatePostMutation} from 'generated/graphql';
import usePosts from 'hooks/usePosts';

const Index: React.FC<{
  language: string;
  service: string;
  gender: string;
  url: string;
  voiceId: string;
}> = ({language, service, gender, url, voiceId}) => {
  const toast = useToast();

  const [mutateFn, {loading}] = useCreatePostMutation({
    onError: () => {
      toast({
        title: 'Error',
        description: 'Something went wrong with our server, try again later.',
        status: 'error',
        duration: 2000,
        isClosable: true
      });
    },
    onCompleted: () => {
      toast({
        title: 'Successfully saved',
        description: 'We ve created your account for you.',
        status: 'success',
        duration: 2000,
        isClosable: true
      });
    }
  });

  const {updatePosts} = usePosts();

  const createNewPost = async () => {
    await mutateFn({
      variables: {
        language,
        service,
        gender,
        url,
        voiceId
      }
    });
    await updatePosts();
  };

  return (
    <Button
      isLoading={loading}
      onClick={createNewPost}
      rightIcon={<AddIcon />}
      pl={8}
      pr={8}
      mr={5}
    >
      Save
    </Button>
  );
};

export default Index;
