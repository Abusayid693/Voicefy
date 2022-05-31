import {Heading, HStack, Select, useColorMode, VStack} from '@chakra-ui/react';
import colors from 'style/mode';
import PostsTable from 'components/PostsTable';

const Index: React.FC<{
  data: any;
}> = ({data}) => {
  const {colorMode} = useColorMode();

  return (
    <VStack width={'100%'} bg={colors.fgd_2[colorMode]} p={2} borderRadius={5}>
      <HStack mb={5} w="100%" justifyContent={'space-between'}>
        <Heading fontSize={22} fontWeight={500}>
          Saved
        </Heading>
        <HStack w="30%">
          <Select placeholder="Select option" size={'sm'}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="Select option" size={'sm'}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </HStack>
      </HStack>
      <PostsTable data={data} />
    </VStack>
  );
};

export const PostsSmall: React.FC<{
  data: any;
}> = ({data}) => {
  const {colorMode} = useColorMode();
  return (
    <VStack width={'100%'} bg={colors.fgd_2[colorMode]} p={2} borderRadius={5}>
      <HStack mb={5} w="100%" justifyContent={'space-between'}>
        <Heading fontSize={22} fontWeight={500}>
          Recent Voiceovers
        </Heading>
      </HStack>
      <PostsTable data={data} />
    </VStack>
  );
};

export default Index;
