import {HStack, VStack} from '@chakra-ui/react';
import DashboardSideBar from 'components/DashboardSideBar';
import useAuth from '../../hooks/useAuth';

//--
import {
  AnalyticsTotalGenderUsed,
  AnalyticsTotalLanguagesUsed,
  AnalyticsTotalSavedVoices,
  AnalyticsTotalServicesUsed,
  AnalyticsTotalVoicesUsed
} from 'containers/Analytics';

const Index = () => {
  const auth = useAuth();

  return (
    <>
      {auth.isAuthenticated() ? (
        <DashboardSideBar activeIndex={2}>
          <VStack alignItems={'flex-start'} gap="30px">
            <HStack justifyContent={'flex-start'} alignItems="flex-start">
              <AnalyticsTotalGenderUsed />
              <AnalyticsTotalSavedVoices />
            </HStack>
            <hr />
            <AnalyticsTotalVoicesUsed />
            <hr />
            <AnalyticsTotalLanguagesUsed />
            <hr />
            <hr />
            <AnalyticsTotalServicesUsed />
          </VStack>
        </DashboardSideBar>
      ) : (
        <h1>Please first login</h1>
      )}
    </>
  );
};

export default Index;
