import {Heading, VStack} from '@chakra-ui/react';
import {useAnalyticsTotalSavedVoicesQuery} from 'generated/graphql';

export const AnalyticsTotalSavedVoices = () => {
  const {data, loading} = useAnalyticsTotalSavedVoicesQuery();

  return (
    <VStack w="50%" bg="#fff" alignItems={'flex-start'} p="3">
      <Heading fontSize={18}>Total Saved Voices </Heading>
      <Heading fontSize={20}>{data?.analyticsTotalSavedVoices}</Heading>
    </VStack>
  );
};
