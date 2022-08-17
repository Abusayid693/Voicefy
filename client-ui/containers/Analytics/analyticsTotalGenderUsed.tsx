import {Heading, ListItem, UnorderedList, VStack} from '@chakra-ui/react';
import {useAnalyticsTotalGenderUsedQuery} from 'generated/graphql';

export const AnalyticsTotalGenderUsed = () => {
  const {data, loading} = useAnalyticsTotalGenderUsedQuery();

  return (
    <VStack w="50%" alignItems={'flex-start'} bg="#fff">
      <Heading fontSize={18}>Total Gender Used </Heading>

      <UnorderedList m={0} p="3" listStyleType="none">
        {data?.analyticsTotalGenderUsed?.map(item => (
          <ListItem p={0}>
            <div>
              <Heading>{item.key}</Heading>
              <Heading fontSize={20}>{item.count}</Heading>
            </div>
          </ListItem>
        ))}
      </UnorderedList>
    </VStack>
  );
};
