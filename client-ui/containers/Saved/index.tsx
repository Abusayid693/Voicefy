import {Heading, HStack, Select, useColorMode, VStack} from '@chakra-ui/react';
import PostsTable from 'components/PostsTable';
import {useMemo, useState} from 'react';
import colors from 'style/mode';
import {getSortedObj} from 'util/utils';

const Index: React.FC<{
  data: any;
}> = ({data}) => {
  const {colorMode} = useColorMode();
  const [sortBy, setSortBy] = useState<string>('');

  const sortedData = useMemo(() => getSortedObj(sortBy, data), [sortBy]);

  return (
    <VStack width={'100%'} bg={colors.fgd_2[colorMode]} p={2} borderRadius={5}>
      <HStack mb={5} w="100%" justifyContent={'space-between'}>
        <Heading fontSize={22} fontWeight={500}>
          Saved
        </Heading>
        <HStack w="30%">
          <Select
            placeholder="Sort by..."
            size={'sm'}
            value={sortBy}
            defaultValue="date"
            onChange={e => setSortBy(e.target.value)}
          >
            <option value="voiceId">voice id</option>
            <option value="language">language</option>
            <option value="service">service</option>
          </Select>
          <Select placeholder="Query by" size={'sm'}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </HStack>
      </HStack>
      <PostsTable data={sortedData} />
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
